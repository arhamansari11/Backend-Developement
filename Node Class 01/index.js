const thisApp = require('./this.js')


console.log(thisApp)

const fs = require('fs')
// const txt = fs.readFileSync('./intro.txt' , 'utf-8')


const text = fs.readFile('./intro.txt' , 'utf-8' ,(err , text)=>{
    console.log(text)
})

