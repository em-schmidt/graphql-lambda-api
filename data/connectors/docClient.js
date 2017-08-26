
import dynamodb from 'serverless-dynamodb-client';

const docClient = dynamodb.doc;

const project = process.env.PROJECT;
const stage = process.env.STAGE;

const tables = {
  usersTable: `${project}-users-${stage}`,
};


export { tables, docClient };

