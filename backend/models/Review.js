const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    Reviewdate: {
        type: Date,
        default: Date.now
    },
    Rating: {
        type: Number,
        required: true
    },
    Comments: {
        type: String,
        required: false
    },
    Reviewername: {
        type: String,
        requird: true
    }
});

models.export = mongoose.model('Review',ReviewSchema);