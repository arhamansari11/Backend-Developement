const fs = require('fs')
const jsondata = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
const product = jsondata.products;

const express = require('express');
const server = express()


const morgan = require('morgan');
// server.use(morgan('default'))

server.use(express.json());
server.use(express.static("public"));


// We call them API-root and also Base URL.
// C R U D 
// CREATE  READ  UPDATE  DELETE


//  1=>    This is POST API usually used for CREATE Data in Database.
// CREATE API
server.post('/products', (req, res) => {
  console.log(req.body);
  product.push(req.body);
  res.json(req.body);
})




// 2 =>     This is GET API usually used for GET Data from Database.
// READ API
server.get('/products', (req, res) => {
  res.json(product);  
  console.log("GET API DONE");
})

// For Get only one product through it's id.
server.get('/products/:id', (req, res) => {
  const id = +req.params.id;
  const newpd =product.find(p=>p.id===id)
  console.log(newpd);
  res.json(newpd);  
})
 



// 3  =>    This is UPDATE API usually used for UPDATE Data in Database.
// UPDATE API
server.put('/products/:id', (req, res) => {
  const id = +req.params.id;
  const newpdIndex =product.findIndex(p=>p.id===id)
  product.splice(newpdIndex,1,{...req.body,id:id})
  console.log(newpdIndex);
  res.status(202).json();  
})
 


// 3 =>    This is UPDATE API usually used for UPDATE ( Specific ) Data in Database.
// UPDATE API
server.patch('/products/:id', (req, res) => {
  const id = +req.params.id;
  const newpdIndex =product.findIndex(p=>p.id===id)
  const patchdata = product[newpdIndex]
  product.splice(newpdIndex,1,{...patchdata , ...req.body})
  console.log(newpdIndex);
  res.status(202).json();  
})



// 4 =>    This is DELETE API usually used for DELETE Data in Database.
// DELETE API
server.delete('/products/:id', (req, res) => {
  const id = +req.params.id;
  const newpdIndex =product.findIndex(p=>p.id===id)
  const patchdata = product[newpdIndex]
  product.splice(newpdIndex,1)
  console.log(newpdIndex);
  res.status(202).json();  
})








server.listen(8080, () => {
  console.log("Server Running on Port 8080");
})













