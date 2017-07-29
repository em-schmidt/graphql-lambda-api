/* 'use strict'; */

import * as server from "apollo-server-lambda";
import { Schema } from "./data/schema";

exports.graphqlHandler  =  server.graphqlLambda((event, context) => {
  const headers = event.headers;
  const functionName = context.functionName;

  return {
    schema: Schema,
    context: {
      headers,
      functionName,
      event,
      context
    }
  }
});

exports.graphiqlHandler = server.graphiqlLambda({
  endpointURL: '/graphql'
})


