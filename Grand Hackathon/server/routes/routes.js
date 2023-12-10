const express = require('express');
const moongose = require('mongoose');
const Router = express.Router(); // Instantiate the router
const todoapp = require('../models/todo');

// POST DATA
Router.post('/addTask', async (req, res) => {
    try {
        const newtask = new todoapp({
            _id: new moongose.Types.ObjectId(),
            title: req.body.title,
            task: req.body.task
        });
        const result = await newtask.save();
        res.json(result);
        console.log(result);
    } catch (error) {
        res.status(500).json("User Not Found");
    }
});

// GET DATA
Router.get('/', async (req, res) => {
    const alldata = await todoapp.find(); // Add await here
    res.json(alldata);
});

// DELETE DATA
Router.delete('/delTask/:id', async (req, res) => { // Add :id to the route
    try {
        const id = req.params.id;
        const deleted = await todoapp.findByIdAndDelete(id); // Pass id to findByIdAndDelete
        if (!deleted) {
            return res.status(404).json("User Not Found");
        } else {
            res.json(deleted);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

// UPDATE DATA
Router.put('/updTask/:id', async (req, res) => { // Add :id to the route
    try {
        const id = req.params.id;
        const updatedtask = {
            title: req.body.title,
            task: req.body.task
        };
        const result = await todoapp.findByIdAndUpdate(id, updatedtask, {
            new: true
        });
        if (!result) {
            return res.status(404).json("User Not Found");
        } else {
            res.json(result);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = Router; // Export the instantiated router
