const actions = require("../actions");

const getUsers = () => {
	return actions.getUsers()
			.then( users => users)
			.catch( err => console.log(err));
}; 

const getOneUser = (_, { id }, context, info) => {
	return actions.getUserById(id)
				.then(user => user)
				.catch(err => console.log(err));
}

const getByGenderAndVersion = (_, args, context, info) => {
	return actions.getUserByGenderAndVersion( args )
				.then(users => users)
				.catch(err => console.log(err));
}

module.exports = {
	getUsers,
	getOneUser,
	getByGenderAndVersion,
};
