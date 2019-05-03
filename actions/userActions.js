const { Users } = require('../models');

const createUser = (data) => {
   return Users.create(data);
}

module.exports = {
    createUser
}