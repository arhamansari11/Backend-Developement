const express = require('express');
const controller = require('../controller/product.js')
const router = express.Router();



router
  .post('/', controller.createdata)
  .get('/', controller.getAlldata)
  .get('/:id', controller.getdatabyid)
  .put('/:id', controller.replacedata)
  .patch('/:id', controller.updatedata)
  .delete('/:id', controller.deletedata)

exports.routing = router;