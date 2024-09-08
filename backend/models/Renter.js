const mongoose = require('mongoose');
const SignUp = require('./SignUp');

const RenterSchema = new mongoose.Schema({
    Aadharcardno: {
        type: Number,
        required: true
    },
    Rname: {
        type: String,
        required: true
    },
    DLno: {
        type: Number,
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
    Signupid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SignUp',
        required: true
    }
});


module.exports = mongoose.model('Renter',RenterSchema);