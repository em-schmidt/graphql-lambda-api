/* 'use strict'; */

import * as server from "apollo-server-lambda";
import { Schema } from "./data/schema";

exports.graphqlHandler  =  server.graphqlLambda({ schema: Schema });

exports.graphiqlHandler = server.graphiqlLambda({
  endpointURL: '/graphql',
  query: '{ user }'
});


