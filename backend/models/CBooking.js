const mongoose = require('mongoose');
const Renter = require('./Renter');
const Car = require('./Car');

const CBookingSchema = mongoose.Schema({
    Renterid: {
        ref: 'Renter',
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    Carid: {
        ref: 'Car',
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    Rentaldate: {
        type: Date,
        default: Date.now
    },
    Returndate: {
        type: Date,
        required: false
    },
    Advancepayment: {
        type: Number,
        required: true
    },
    Rentalamount: {
        type: Number,
        required: true
    },
    Paymentstatus: {
        type: Boolean,
        required: true
    },
    Rentduration: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('CBooking',CBookingSchema);

