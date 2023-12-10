    const mongoose = require('mongoose');
    const appointmentSchema = new mongoose.Schema({
        _id: mongoose.Schema.ObjectId,
        name: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true  
        }
    },
        { collection: "appointment", versionKey: false });

    const Appointment = mongoose.model('appointment', appointmentSchema);
    module.exports = Appointment;
