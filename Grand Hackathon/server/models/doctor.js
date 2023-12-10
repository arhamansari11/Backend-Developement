const mongoose = require('mongoose');

// Define the subcollection schema
const appointmentSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, { _id: false });

// Define the main schema
const drSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    contactinfo: {
        type: String,
        required: true,
        unique: true,
    },
    schedule: [appointmentSchema] // Fixed typo here (shedule to schedule)
}, { collection: "doctor", versionKey: false });

const Doctor = mongoose.model('doctor', drSchema);

module.exports = Doctor;
