const mongoose = require('mongoose');
const Lender = require('./Lender');

const CarSchema = new mongoose.Schema({
    Numberplate: {
        type: Number,
        required: true
    },
    Manufacturer: {
        type: String,
        required: true
    },
    Model: {
        type: String, 
        required: true
    },
    Gear: {
        type: String,
        required: true
    },
    Cname: {
        type: String,
        required: true
    },
    Seater: {
        type: Number,
        required: true
    },
    Colour: {
        type: String,
        required: true
    },
    Rating: {
        type: Number,
        required: true
    },
    Availibility: {
        type: Boolean,
        required: true
    },
    Perdayamount: {
        type: Number,
        required: true
    },
    Runningon: {
        type: String,
        required: true
    },
    Ctype: {
        type: String,
        required: true
    },
    Lenderid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lender',
        required: true
    },
    Cdocumentspath: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Car',CarSchema);