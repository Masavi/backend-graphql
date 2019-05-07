const { Users } = require('../models');

const createUser = (data) => {
   return Users.create(data);
}

const getUserByEmail = (email) => {
    return Users.findOne({ email: email });
}

module.exports = {
    createUser,
    getUserByEmail,
}