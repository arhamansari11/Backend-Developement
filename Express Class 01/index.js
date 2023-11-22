const data = require('./data.json');
const express = require('express');
const server = express()

// It is third party middlewear
const morgan = require('morgan');
server.use(morgan('default'))


// It is Built-In Middlewear
server.use(express.json());
server.use(express.static("public"));



// It is Application-Base Middlewear

// server.use((req,res,next)=>{
//   // console.log(req.hostname,req.ip,req.method);
//   console.log(req.get("Sec-Ch-Ua-Platform"));
//   next();
// })


// It is Routes-Based Middlwear

const auth = (req,res,next)=>{
  if (req.body.password == 'arham786') {
    console.log(req.body);
    next();
  } else {
    res.sendStatus(401);
    console.error("Your Password is incorrect"); 
  }
}



// API , End-Point , Routes
server.get('/', (req, res) => {
  // res.json(data)
  res.send("This is my GET API")
  // res.status(203).send("<h1>I sens status code 202</h1>")
  // res.send(req.get("Status Code"))
  // res.sendFile('./index.html')
  // console.log();  
  console.log("GET API DONE");
})
server.patch('/',auth, (req, res) => {

  res.send("Server Started with Patch Api")
  console.log("Server Started with Patch Api");
})
server.post('/', (req, res) => {
  // res.send("Server Started with Post Api")
  res.json({type:"POST API"})
  console.log("Server Started with Post Api");
})
server.delete('/', (req, res) => {
  res.send("Server Started with Delete Api")
  console.log("Server Started with Delete Api");
})




server.listen(8080, () => {
  console.log("Server Running on Port 8080");
})