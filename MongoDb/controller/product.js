const fs = require('fs')
const jsondata = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
const product = jsondata.products;

exports.createdata = (req, res) => {
    console.log(req.body);
    product.push(req.body);
    res.json(req.body);
}

exports.getAlldata = (req, res) => {
    res.json(product);
    console.log("GET API DONE");
}


exports.getdatabyid = (req, res) => {
    const id = +req.params.id;
    const newpd = product.find(p => p.id === id)
    console.log(newpd);
    res.json(newpd);
}
exports.replacedata = (req, res) => {
    const id = +req.params.id;
    const newpdIndex = product.findIndex(p => p.id === id)
    product.splice(newpdIndex, 1, { ...req.body, id: id })
    console.log(newpdIndex);
    res.status(202).json();
}


exports.updatedata = (req, res) => {
    const id = +req.params.id;
    const newpdIndex = product.findIndex(p => p.id === id)
    const patchdata = product[newpdIndex]
    product.splice(newpdIndex, 1, { ...patchdata, ...req.body })
    console.log(newpdIndex);
    res.status(202).json();
}

exports.deletedata = (req, res) => {
    const id = +req.params.id;
    const newpdIndex = product.findIndex(p => p.id === id)
    const patchdata = product[newpdIndex]
    product.splice(newpdIndex, 1)
    console.log(newpdIndex);
    res.status(202).json();
}