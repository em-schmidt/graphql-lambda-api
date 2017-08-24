/* 'use strict'; */

import * as server from 'apollo-server-lambda';
import { Schema } from './data/schema';
import { docCLient } from './data/connectors/docClient';

exports.graphqlHandler = server.graphqlLambda((event, context) => {
  const headers = event.headers;
  const functionName = context.functionName;

  return {
    schema: Schema,
    context: {
      headers,
      functionName,
      event,
      context,
      docCLient,
    },
  };
});

exports.graphiqlHandler = server.graphiqlLambda({
  endpointURL: './graphql',
});

