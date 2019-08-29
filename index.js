const express = require('express');
const graphqlHTTP = require('express-graphql');
const _ = require('lodash');
const { makeExecutableSchema } = require('graphql-tools');
const { moviesResolvers } = require('./Resolvers/movies');
const { actorsResolvers } = require('./Resolvers/actors');
const { userResolvers } = require('./Resolvers/user');
const { auth } = require('./Auth/auth');

// schema file
const typeDefs = require('./Schema/schema.js');

const resolvers = _.merge({ ...moviesResolvers, ...actorsResolvers, ...userResolvers });


const executableSchema = makeExecutableSchema({ typeDefs, resolvers });

const loggingMiddleware = (req, res, next) => {
    auth(req.query.token);
    next();
}

var app = express();
app.use(loggingMiddleware);
app.use('/graphql', graphqlHTTP({
    schema: executableSchema,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');