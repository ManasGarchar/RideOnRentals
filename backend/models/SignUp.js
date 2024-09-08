const mongoose = require('mongoose');

const SignUpSchema = mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('SignUp',SignUpSchema);