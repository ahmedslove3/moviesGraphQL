

// Construct a schema, using GraphQL schema language
var schema = `
type Query {
    movies(id:Int):[Movie]!
}


type Movie {
    title:String!
    year:String!
    rating:String!
}
`;

module.exports = schema;