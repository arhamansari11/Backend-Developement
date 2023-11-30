const express = require('express');
const moongose = require('mongoose');
const usermodel = require('../models/usermodel');
const router = express.Router();

// POST Data

router.post('/addUser', async (req, res) => {
    try {
        const newuser = new usermodel({
            _id: new moongose.Types.ObjectId(),
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            email: req.body.email
        });
        const result = await newuser.save();
        console.log(result);
        res.json(result)
    } catch (error) {
        res.status(400).json({ message: "Your Data is not added" })
        console.log(error);
    }
})


// GET DATA

router.get('/users', async (req, res) => {
    const useralldata = await usermodel.find();
    res.json(useralldata);
})

// GET DATA By Id

router.get('/users/:id', async (req, res) => {
    try {
        const userbyId = req.params.id;
        const userdataId = await usermodel.findById(userbyId);
        if (!userdataId) {
            return res.status(404).json("User Not Found")
        } else {
            res.status(200).json(userdataId);
        }
    } catch (error) {
        return res.status(500).json(error)
    }
})

// DELETE DATA By Id
router.delete('/delUser/:id', async (req, res) => {
    try {
        const userbyId = req.params.id;
        const userdataId = await usermodel.findByIdAndDelete(userbyId);
        if (!userdataId) {
            return res.status(404).json("User Not Found")
        } else {
            res.status(200).json(userdataId);
        }
    } catch (error) {
        return res.status(500).json(error)
    }

})


// UPDATE USER By Id

router.put('/updUser/:id', async (req, res) => {
    try {
        const userbyId = req.params.id;
        const dataupdated = new usermodel({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            email: req.body.email,
        })
        const updateddata = await usermodel.findByIdAndUpdate(userbyId, dataupdated, {
            new: true
        })
        console.log(updateddata);
        if (!updateddata) {
            return res.status(404).json("User Not Found")
        } else {
            res.status(200).json(updateddata);
        }
    } catch (error) {
        return res.status(500).json(error)
    }
    console.log(error);
})


module.exports = router;