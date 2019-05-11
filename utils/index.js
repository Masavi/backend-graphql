const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary');
const { SECRET_KEY } = require('../config');
const { getUserById } = require('../actions');

const authUserById = (context) => {
    const Authorization = context.request.get("Authorization");
    // { Auth: "JWT KADK82kjdbafk83eb"};
    if (Authorization) {
        const token = Authorization.replace("JWT ", "");
        const { _id } = jwt.verify(token, SECRET_KEY);
        return getUserById(_id);
    }

    throw new Error("No estás autenticado");
}

const storeUpload = (stream) => {
   cloudinary.config({ 
    cloud_name: 'dplkcfxqf', 
    api_key: '818292199433842', 
    api_secret: 'a_O-ilcf3VYuP8-ZU5TxBNZGnp4' 
  });
  
  new Promise((resolve, reject) => {
    const buffer = cloudinary.v2.uploader.upload_stream((err, result) => {
        if(err) { reject(err) };
        resolve(result);
    });

    stream.pipe(buffer);
  });
}


module.exports = {
    authUserById,
    storeUpload,
}