const express = require('express')
const server = express()
const productrouter = require('./routes/routes.js')

// Body Parser  Middlewear   
server.use(express.json());
server.use(express.static("public"));
server.use('/products', productrouter.routing)



//MVS  =>  Model-View-Controller







server.listen(8080, () => {
  console.log("Server Running on Port 8080");
})

 











