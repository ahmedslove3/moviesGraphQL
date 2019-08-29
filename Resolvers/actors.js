const _ = require('lodash');
const { directorsStore } = require('./directors');

let actorsStore = [
    {
        id: 1,
        name: "Ahmed Aldaly",
        birthday: "5th of june",
        country: "USA",
        directorsIds: [1, 3]
    },
    {
        id: 2,
        name: "Someone else",
        birthday: "5th of june",
        country: "Egypt",
        directorsIds: [1, 2]
    }
]

let actorsResolvers = {
    Actor: {

        directors: (parent) => {

            return _.filter(directorsStore, ({ id }) => {

                for (directorId of parent.directorsIds) {
                    if (directorId === id) return true;
                }
                return false;
            });

        }
    }
}






module.exports = { actorsResolvers, actorsStore };