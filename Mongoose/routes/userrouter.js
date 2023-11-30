const express = require("express");
const router = express.Router();
const Users = require('../models/usermodel');
const mongoose = require("mongoose");



// We define all API's Here

// Read users data
router.get("/users", async (req, res) => {
    const usersData = await Users.find();
    res.json(usersData);
});

// Read a specific user data
router.get("/users/:id", async (req, res) => {
    try {
        const userid = req.params.id;
        const finduser = await Users.findById(userid);
        if (!finduser) {
            return res.status(404).json({ message: "user not found" });
        } else {
            res.status(200).json(finduser);
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

// Create user

router.post("/addUser", (req, res) => {
    const newUser = new Users({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    })
    const result = newUser.save();
    res.json(newUser)
});



// delete user
router.delete("/deleteUser/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await Users.findByIdAndDelete(userId);
        console.log("deletedUser : ", deletedUser);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found!" });
        }

        return res.json({ message: "user deleted successfuly!" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// UpdateData

router.put("/updateUser/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const dataToBeUpdate = new Users({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
        });

        const updatedData = await Users.findByIdAndUpdate(userId, dataToBeUpdate, {
            new: true,
        });
        console.log("updatedData : ", updatedData);

        if (!updatedData) {
            return res.status(404).json({ message: "User not found!" });
        }

        return res.json({ message: "user updated successfuly!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;