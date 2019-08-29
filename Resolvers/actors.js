const _ = require('lodash');

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
        directorsIds: [1, 3]
    }
]

module.exports = { actorsStore };