const { Users } = require('../models');

const createUser = (data) => {
   return Users.create(data);
}

const getUsers = () => {
    return Users.find();
}

const getUserByEmail = (email) => {
    return Users.findOne({ email: email });
}

const getUserById = (_id) => {
    return Users.findOne({ _id: _id });
}

module.exports = {
    createUser,
    getUsers,
    getUserByEmail,
    getUserById,
}