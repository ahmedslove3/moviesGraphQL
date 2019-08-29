
const _ = require('lodash');
const bcrypt = require('bcrypt');

let usersStore = [
    {
        id: 1,
        name: "Daly",
        token: "sdfsdff",
        username: "a.aldaly",
        password: "sldkfjsojdofsjo"
    }
]



let userResolvers = {
    Mutation: {
        createUser: async (parent, args) => {
            let user = _.find(usersStore, ({ username }) => {
                return username === args.data.username;
            });

            if (user) {
                throw Error('User already exist');
            }


            let id = _.random(140)
            let password = await bcrypt.hash(args.data.password, 12);


            usersStore.push({
                id: _.random(140),
                name: "user" + id,
                token: `dynamichash${id}dynamichash${args.data.username}:)`,
                username: args.data.username,
                password: password
            })
            console.log(usersStore);

            return {
                token: usersStore[usersStore.length - 1].token,
                user: { ...usersStore[usersStore.length - 1], password: null }
            };
        }

    },

}




module.exports = { userResolvers, usersStore };