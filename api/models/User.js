var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: {
        lowercase: true,
        required: true,
        trim: true,
        type: String,
        unique: true
    },
    username: {
        required: true,
        type: String,
        unique: true
    },
    password: String,
});
var User = mongoose.model(
    'User',
    userSchema,
    'users'
);