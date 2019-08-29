const express = require('express');
const graphqlHTTP = require('express-graphql');
const _ = require('lodash');
const { makeExecutableSchema } = require('graphql-tools');
const { moviesResolvers } = require('./Resolvers/movies');
const { actorsResolvers } = require('./Resolvers/actors');

// schema file
const typeDefs = require('./Schema/schema.js');

const resolvers = _.merge({ ...moviesResolvers, ...actorsResolvers });


const executableSchema = makeExecutableSchema({ typeDefs, resolvers });

var app = express();

app.use('/graphql', graphqlHTTP({
    schema: executableSchema,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');