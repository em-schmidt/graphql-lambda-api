/* 'use strict'; */

import * as server from 'apollo-server-lambda';
import schema from './data/schema';
import { tables, docClient } from './data/connectors/docClient';

exports.graphqlHandler = server.graphqlLambda((event, context) => {
  const headers = event.headers;
  const functionName = context.functionName;

  return {
    schema,
    context: {
      headers,
      functionName,
      event,
      context,
      docClient,
      tables,
    },
  };
});

exports.graphiqlHandler = server.graphiqlLambda({
  endpointURL: './graphql',
});

