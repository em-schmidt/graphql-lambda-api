
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import User from './typedefs/user';
import Interests from './typedefs/interests';
import JobPost from './typedefs/jobPost';
import Scalars from './typedefs/scalars';
import Enums from './typedefs/enums';

const RootQuery = `
  type Query {
    user: User!
    interests: [Interests]
    educationInstitutionList: [EducationInstitutionList]
    availableJobs: [JobPost]
  }
`;

const SchemaDefinition = `
  type RootQuery {
    query: RootQuery
  }
`;

const schema = [SchemaDefinition, 
  RootQuery, 
  ...Enums, 
  ...Scalars, 
  ...User, 
];


const resolvers = {
  Query: {
    user(obj, args, context, info) {
      return { id: 1, firstName: 'Test', lastName: 'User'};
    }
  }
};

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

//mockedSchema = addMockFunctionsToSchema({ executableSchema });

export { executableSchema as Schema };
