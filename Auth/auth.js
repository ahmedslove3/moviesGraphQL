const _ = require('lodash');
const { usersStore } = require('../Resolvers/user');

let currentUser;

const auth = (reqToken) => {
    let user = _.find(usersStore, ({ token }) => {
        return token === reqToken;
    });

    if (!user) {
        currentUser = false
        return false;
    }

    currentUser = user;

    return currentUser;

}

const isLoggedIn = () => {
    return currentUser;
}

module.exports = { auth, isLoggedIn };