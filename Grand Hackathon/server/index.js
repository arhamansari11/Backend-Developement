const express = require('express');
const moongose = require('mongoose')
const server = express();
const routing = require('./routes/drroutes')
const approuting = require('./routes/aproutes')
const cors = require("cors");
require("dotenv").config();

moongose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = moongose.connection;

// Body Parser
server.use(cors());
server.use(express.json());
server.use('/',routing)
server.use('/api',approuting)

db.on("error", (error) => {
    console.log("Mongodb error : ", error);
});

// 2- scenario when mongodb connected

db.once("open", () => {
    console.log("Mongodb connected sucessfully!");
    const port = process.env.PORT;
    server.listen(port, () => {
        console.log(`server is running on ${port} port`);
    });
});
