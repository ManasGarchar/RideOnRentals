const mongoose = require('mongoose');
const SignUp = require('./SignUp');

const LenderSchema = new mongoose.Schema({
    Aadharcardno: {
        type: Number,
        required: true
    },
    Lname: {
        type: String,
        required: true
    },
    Addresslink: {
        type: String, //Google map link
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Rating: {
        type: Number,
        required: true
    },
    Signupid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SignUp',
        required: true
    }
});


module.exports = mongoose.model('Lender',LenderSchema);