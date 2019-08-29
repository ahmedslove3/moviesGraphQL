const express = require('express');
const graphqlHTTP = require('express-graphql');
const _ = require('lodash');
const { makeExecutableSchema } = require('graphql-tools');

// schema file
const typeDefs = require('./Schema/schema.js');

const schema = makeExecutableSchema(typeDefs);

var app = express();
app.use(loggingMiddleware);
app.use('/graphql', graphqlHTTP({
    schema: executableSchema,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');