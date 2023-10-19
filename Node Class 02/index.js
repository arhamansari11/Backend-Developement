const http = require('http')
const fs = require('fs')
const readfs = fs.readFileSync('./index.html', 'utf-8')
const jsondata = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
const error = fs.readFileSync('./error.html', 'utf-8')
const product = jsondata.products;




const server = http.createServer((req, res) => {
    if (req.url.startsWith('/product')) {
        const id = req.url.split('/')[2];
        const newprd = product.find(p => p.id === (+id));
        console.log(newprd);
    
        if (newprd) {
            res.setHeader("Content-Type", "text/html");
            const modifydata = readfs
                .replace('***title***', newprd.title)
                .replace('***price***', newprd.price)
                .replace('***rating***', newprd.rating)
                .replace('***url***', newprd.thumbnail)
                .replace('***buy***', newprd.brand);
            res.end(modifydata);
        } else {
        }
        return;
    }
    
    switch (req.url) {
        case "/":
            res.setHeader("Content-Type", "text/html")
            res.end(readfs)
            break;
        case "/api":
            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify(jsondata));
            break;
        default:
            res.setHeader("Content-Type", "text/html")
            res.end(error)

    }
    console.log("Server Started")
})
server.listen(8080);
