
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import User from './typedefs/user';
// import Interests from './typedefs/interests';
// import JobPost from './typedefs/jobPost';
import Scalars from './typedefs/scalars';
import Enums from './typedefs/enums';

const SchemaDefinition = `
  type Query {
    currentUser: User!
    interests: [Interests]
    educationInstitutionList: [EducationInstitutionList]
    availableJobs: [JobPost]
  }

  type Mutation {
    updateCurrentUser(firstName: String, lastName: String, email: String): User
  }
`;

const fullSchema = [SchemaDefinition,
  ...Enums,
  ...Scalars,
  ...User,
];

function getCurrentUser(obj, args, context) {
  const userId = context.event.requestContext.identity.user;
  return new Promise((resolve, reject) => {
    const params = {
      TableName: context.tables.usersTable,
      Key: {
        id: userId,
      },
    };

    context.docClient.get(params, (err, data) => {
      if (err) return reject(err);
      return resolve(data.Item);
    });
  });
}

function updateCurrentUser(_, args, context) {
  // TODO: Currently uses docclient.put, which replaces the existing item...
  // doesn't allow field level uptdates, need to allow for single field updates
  const userId = context.event.requestContext.identity.user;
  return new Promise((resolve, reject) => {
    const itemParam = args;
    itemParam.id = userId;
    const params = {
      TableName: context.tables.usersTable,
      Item: itemParam,
    };
    context.docClient.put(params, (err) => {
      if (err) return reject(err);
      return resolve(getCurrentUser(_, _, context));
    });
  });
}

function getUserById(context, userId) {
  return new Promise((resolve, reject) => {
    const params = {
      TableName: context.tables.usersTable,
      Key: {
        id: userId,
      },
    };

    context.docClient.get(params, (err, data) => {
      if (err) return reject(err);
      return resolve(data.Item);
    });
  });
}


const rootResolvers = {
  Query: {
    currentUser: (obj, args, context) => getCurrentUser(obj, args, context),
    educationInstitutionList: (obj, args, context) => {
      return [{ id: 1, name: 'Big U', city: 'Sometown', state: 'PA', country: 'USA' }];
    },
    availableJobs: (obj, args, context) => {
      return [{ id: 1, name: 'Job Co.', description: 'We have jobby jobs!', city: 'Sometown', state: 'PA', country: 'USA' }];
    },
    interests: (obj, args, conext) => {
      return [{ id: 1, name: 'interest', category: 'interestCategory' }];
    },
  },
  Mutation: {
    updateCurrentUser: (obj, args, context) => updateCurrentUser(obj, args, context),
  },
};

const resolvers = rootResolvers;
// const resolvers = merge(rootResolvers, interestResolvers);

const schema = makeExecutableSchema({
  typeDefs: fullSchema,
  resolvers,
});

addMockFunctionsToSchema({
  schema,
  mock: {},
  preserveResolvers: true,
});


export { schema as default };

