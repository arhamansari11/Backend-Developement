const express = require('express');
const mongoose = require('mongoose');
const Router = express.Router();
const Doctor = require('../models/doctor'); // Import the Doctor model

// POST DATA
Router.post('/addDr', async (req, res) => {
    try {
        const newDoctor = new Doctor({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            specialization: req.body.specialization,
            contactinfo: req.body.contactinfo,
            shedule: req.body.shedule // Assuming shedule is an array of appointments
        });
        const result = await newDoctor.save();
        res.json(result);
        console.log(result);
    } catch (error) {
        res.status(500).json("Error creating doctor");
    }
});

// GET DATA
Router.get('/', async (req, res) => {
    try {
        const allDoctors = await Doctor.find();
        res.json(allDoctors);
    } catch (error) {
        res.status(500).json("Error fetching doctors");
    }
});

// DELETE DATA
Router.delete('/delDr/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await Doctor.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json("Doctor Not Found");
        } else {
            res.json(deleted);
        }
    } catch (error) {
        res.status(500).json("Error deleting doctor");
    }
});

// UPDATE DATA
Router.put('/updDr/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedDoctor = {
            name: req.body.name,
            specialization: req.body.specialization,
            contactinfo: req.body.contactinfo,
            shedule: req.body.shedule
        };
        const result = await Doctor.findByIdAndUpdate(id, updatedDoctor, {
            new: true
        });
        if (!result) {
            return res.status(404).json("Doctor Not Found");
        } else {
            res.json(result);
        }
    } catch (error) {
        res.status(500).json("Error updating doctor");
    }
});

module.exports = Router;
