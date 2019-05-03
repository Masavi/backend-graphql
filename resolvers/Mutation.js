const actions = require('../actions');

const signup = (_, args, context, info) => {
    return actions.createToken(args);
};

module.exports = {
    signup,
}