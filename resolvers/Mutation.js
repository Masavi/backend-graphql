const actions = require('../actions');
const { authUserById } = require('../utils'); 

const signup = (_, args, context, info) => {
    return actions.signup(args.data).then( token => {
                      return { token, mensaje: "¡usuario creado exitosamente!" }
                  })
                  .catch(err => {
                      return { token:err, mensaje: "Hubo un error al generar el token..." }
                  });                
};

const login = (_, args, context, info) => {
    return actions.login(args)
            .then( token => {
                return { token, mensaje: "¡inicio de sesión exitoso!" }
            })
            .catch(err => {
                return { token:err, mensaje: "Hubo un error al iniciar sesión..." }
            }); 
};

const createUser = async (_, { data }, context, info) => {
    const user = await authUserById(context);
    if (!user) throw new Error("No estás autenticado");
    return actions.createUser(data)
        .then(newUser => newUser)
        .catch(err => console.log(err));
};

module.exports = {
    signup,
    login,
    createUser,
};