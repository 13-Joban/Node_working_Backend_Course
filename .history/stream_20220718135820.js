const fs = require('fs');
const server = require('http').createServer();

server.on('request', (request, response) =>{

    fs.readFile('./t')
})