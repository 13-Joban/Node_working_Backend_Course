const EventEmitter = require('events')

const myemitter = new EventEmitter();

myemitter.emit('newsale');
myemitter.on('newsalse' , () =>{
    console.log('newsalse received');
})
 myemitter.on('newsale', () => {
    
 })