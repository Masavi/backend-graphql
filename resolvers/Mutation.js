const actions = require('../actions');

const signup = (_, args, context, info) => {
    return actions.createToken(args);
};

const createUser = async (_, { data }, context, info) => {
    return await actions.createUser(data)
                        .then( user => user )
                        .catch( err => console.log(err));
};

module.exports = {
    signup,
    createUser
};