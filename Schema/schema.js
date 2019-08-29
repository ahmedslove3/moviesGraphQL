

// Construct a schema, using GraphQL schema language
var schema = `
type Query {
    movies(id:Int):[Movie]!
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