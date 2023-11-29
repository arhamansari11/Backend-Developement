require('dotenv').config()
const express = require('express')
const server = express()
const productrouter = require('./routes/routes.js')

// Body Parser  Middlewear   
server.use(express.json());
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products', productrouter.routing)


console.log('Password :',process.env.DB_PASSWORD)








server.listen(process.env.PORT, () => {
  console.log("Server Running on :",process.env.PORT);
})

 











