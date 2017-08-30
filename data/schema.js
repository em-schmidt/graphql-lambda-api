
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import User from './typedefs/user';
import Interests from './typedefs/interests';
import JobPost from './typedefs/jobPost';
import Scalars from './typedefs/scalars';
import Enums from './typedefs/enums';

const SchemaDefinition = `
  type Query {
    currentUser: User!
    interests: [Interests]
    educationInstitutionList: [EducationInstitutionList]
    availableJobs: [JobPost]
    user(id: String!): User!
  }

  type Mutation {
    updateCurrentUser(firstName: String, lastName: String, email: String): User
  }
`;

const fullSchema = [SchemaDefinition,
  ...Enums,
  ...Scalars,
  ...User,
  Interests,
  JobPost,
];

function getCurrentUser(obj, args, context) {
  const userId = context.event.requestContext.identity.user || '1';
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
  const userId = context.event.requestContext.identity.user || '1';
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

function getUserById(obj, args, context) {
  return new Promise((resolve, reject) => {
    const params = {
      TableName: context.tables.usersTable,
      Key: {
        id: args.id,
      },
    };

    context.docClient.get(params, (err, data) => {
      if (err) return reject(err);
      return resolve(data.Item);
    });
  });
}

function getEducationInstitutionList(obj, args, context) {
  return new Promise((resolve, reject) => {
    return resolve([{ id: 1, name: 'Big U', city: 'Sometown', state: 'PA', country: 'USA' }]);
  });
}

function getAvailableJobs(obj, args, context) {
  return new Promise((resolve, reject) => {
    return resolve([{ id: 1, name: 'Job Co.', description: 'We have jobby jobs!', city: 'Sometown', state: 'PA', country: 'USA' }]);
  });
}

function getInterests(obj, args, context) {
  return new Promise((resolve, reject) => {
    return resolve([{ id: 1, name: 'interest', category: 'interestCategory' }]);
  });
}

const rootResolvers = {
  Query: {
    currentUser: (obj, args, context) => getCurrentUser(obj, args, context),
    user: (obj, args, context) => getUserById(obj, args, context),
    educationInstitutionList: (obj, args, context) =>
      getEducationInstitutionList(obj, args, context),
    availableJobs: (obj, args, context) => getAvailableJobs(obj, args, context),
    interests: (obj, args, context) => getInterests(obj, args, context),
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

