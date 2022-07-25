const fs = require('fs');
const server = require('http').createServer();

server.on('request', (request, response) =>{

    // Solution 1
    // fs.readFile('./test-file.txt', (err, data) => {
    //     if(err) console.log(err)

    //     response.end(data)
    // } )

    // Solution 2 
    const readable = fs.createReadStream('./test-file.txt');

    readable.on('data' , chunk => {
        response.write(chunk);

    })
    readable.on('end' , () => {
        response.end()
    } )
    response.on('error' , (err) => {
       c
    })

})

server.listen('3200', '127.0.0.1',() => {
    console.log('Listening at port 3200');
} )