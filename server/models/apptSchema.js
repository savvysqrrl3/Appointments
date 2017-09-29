var mongoose = require('mongoose');

var ApptSchema = new mongoose.Schema({
    patient: { type: String, required: true },
    complaint: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    // created_at: { type: Date, required: true, default: Date.now }
});

var Appt = mongoose.model('Appt', ApptSchema);