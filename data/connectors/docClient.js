
import dynamodb from 'serverless-dynamodb-client';

const docClient = dynamodb.doc;

const project = process.env.PROJECT;
const stage = process.env.STAGE;

const tables = {
  usersTable: `${project}-${stage}-users`,
  interestsTable: `${project}-${stage}-interests`,
};


export { tables, docClient };

