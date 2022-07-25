const fs = require('fs');
const server = require('http').createServer();

server.on('request', (request, response) =>{

    // Solution 1
    fs.readFile('./test-file.txt', (err, data) => {
        if(err) console.log(err)

        response.end()
    } )
})