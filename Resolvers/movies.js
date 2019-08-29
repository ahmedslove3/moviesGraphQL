const _ = require('lodash');
let moviesStore = [
    {
        title: "movie title",
        year: "2019",
        rating: "IMDB-9.9,RotenTomatos:very bad",
        actorIds: [1, 2],
    },
    {
        title: "movie title2",
        year: "2018",
        rating: "IMDB-9.9,RotenTomatos:very bad",
        actorIds: [2],
    },
    {
        title: "movie title3",
        year: "2013",
        rating: "IMDB-9.9,RotenTomatos:very bad",
        actorIds: [2],
    },
    {
        title: "Nice movie",
        year: "2012",
        rating: "IMDB-9.9,RotenTomatos:very bad",
        actorIds: [2, 1],
    }
];


let moviesResolvers = {
    Query: {
        movies: (parent, args) => {
            let moviesWithRating;

            moviesWithRating = moviesStore.map(item => {

                return { ...item, scoutbase_rating: null }
            });

            if (args.id) {

                return [moviesWithRating[args.id]];
            }
            return moviesWithRating;
        },
    },
}

module.exports = { moviesResolvers };