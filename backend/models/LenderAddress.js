const mongoose = require('mongoose');
const Renter = require('./Lender');

const LenderAddressSchema = new mongoose.Schema({
    Lenderid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lender',
        required: true
    },
    State: {
        type: String,
        required: true
    },
    District: {
        type: String, 
        required: true
    },
    City: {
        type: String,
        required: true
    },
    Area: {
        type: String,
        required: true
    },
    Buildingname: {
        type: String,
        required: true
    },
    Houseno: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('LenderAddress',LenderAddressSchema);