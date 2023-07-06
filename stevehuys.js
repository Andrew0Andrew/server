const http = require('http');
const port = 3000;
const server = http.createServer((req,res) => {
    res.writeHead(200);
    res.end('hello word');
});

server.listen(port);
console.log(`server with port ${port} is on`)

