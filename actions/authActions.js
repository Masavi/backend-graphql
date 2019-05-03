const jwt = require('jsonwebtoken');

const createToken = (args) => {
    const payload = {
        email: args.email,
        password: args.password,
    }

    const token = jwt.sign(payload, "micodiguinsecretin");

    return {
        token,
        mensaje: "¡token generado exitosamente!"
    };
};

module.exports = { createToken };