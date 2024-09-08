const mongoose = require('mongoose');
const CBooking = require('./CBooking');

const PaymentSchema = mongoose.Schema({
    CBookingid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CBooking'    
    },
    Penaltystatus: {
        type: Boolean,
        required: true
    },
    Penaltyfee: {
        type: Number,
        required: false
    },
    Paymentstatus: {
        type: Boolean,
        required: true
    },
    Finalamount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Payment',PaymentSchema);