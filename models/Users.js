const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: { 
        type: String, 
        required: true 
    }, 
    last_name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Undefined"],
        default: "Undefined",
    }
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;