const { Users } = require('../models');
const { storeUpload } = require('../utils');

const createUser = async (data) => {
   if ( data.profile_img ) {  
       const { createReadStream } = await data.profile_img;
       const stream = createReadStream();
       const cloud_img = await storeUpload(stream);
       console.log(cloud_img);
       data.profile_img = cloud_img.url;
   }
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

const getUserByGenderAndVersion = ( fields ) => {
    let search = {};

    if ( fields.gender ) { search.gender = fields.gender; }
    if ( fields.version ) { search.version = fields.version; }
    if ( fields.first_name ) { search.first_name = fields.first_name; }

    return Users.find(search);
}

module.exports = {
    createUser,
    getUsers,
    getUserByEmail,
    getUserById,
    getUserByGenderAndVersion,
}