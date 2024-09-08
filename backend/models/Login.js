const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Sessionin: {
        type: Date,
        default: Date.now,
    },
    Sessionout: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Login',LoginSchema);