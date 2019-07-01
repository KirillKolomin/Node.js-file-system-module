const fs = require('fs');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer();

fs.readFile('text.txt', (err, data)=>{
    if (err) {
        return callback(err)
    }
    console.log(data, 'async');
});

const data = fs.readFileSync('text.txt', "utf8");
console.log(data, 'sync');

server.listen(port, hostname);

