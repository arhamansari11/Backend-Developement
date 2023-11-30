const express = require('express');
const mongoose = require("mongoose");
const core = require("cors");
require("dotenv").config();

const app = express();

app.use(core());
app.use(express.json());
const userRoutes = require("./routes/userrouter");
app.use("/", userRoutes);


mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;


db.on("error", (error) => {
    console.log("Mongodb error : ", error);
});

// 2- scenario when mongodb connected

db.once("open", () => {
    console.log("Mongodb connected sucessfully!");
    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`server is running on ${port} port`);
    });
});