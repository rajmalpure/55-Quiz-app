const mongoose = require('mongoose');

const signupschema = new mongoose.Schema({
    username: String,
    password: String
});

const Signup = mongoose.model('signupinfo', signupschema);

module.exports = { Signup };
