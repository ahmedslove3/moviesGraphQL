

// Construct a schema, using GraphQL schema language
var schema = `
type Query {
    movies(id:Int):[Movie]!
}
type Mutation {
    createUser(data:UserInput): CreatedUser!
}

input UserInput{
    username:String!
    password:String!
}
type CreatedUser{
    token:String!
    user:User
}

type User{
    username:String!
    password:String
    name:String!
    id:Int!
}


type Movie {
    title:String!
    year:String!
    rating:String!
    actors: [Actor]!
}

type Actor {
    name:String!
    birthday:String!
    country:String!
   
    directors:[Director]!
}

type Director {
    name:String!
    birthday:String!
    country:String!
}
`;

module.exports = schema;