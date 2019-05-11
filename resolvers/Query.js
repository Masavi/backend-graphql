const actions = require("../actions");

const holamundo = (_, args, context, info) => {
	return actions.getHolaMundo();
};

const getUsers = () => {
	return actions.getUsers()
			.then( users => users)
			.catch( err => console.log(err));
}; 

module.exports = {
	holamundo,
	getUsers,
};
