const fs = require('fs');
const server = require('http').createServer();

server.on('request', (request, response) =>{

    // Solution 1
    // fs.readFile('./test-file.txt', (err, data) => {
    //     if(err) console.log(err)

    //     response.end(data)
    // } )

    // Solution 2 
//     const readable = fs.createReadStream('./test-file.txt');

//     readable.on('data' , chunk => {
//         response.write(chunk);

//     })
//     readable.on('end' , () => {
//         response.end()
//     } )
//     response.on('error' , (err) => {
//        console.log(err);
//        response.statusCode(500)
//        response.end('File not Found');
//     })

// Solution 3 To avoid Backpressure --> When readFile occurs at faster rate than consumption

const readable = fs.createReadStream('./test-file.txt');

readable.pipe(response);

})

server.listen('3200', '127.0.0.1',() => {
    console.log('Listening at port 3200');
} )