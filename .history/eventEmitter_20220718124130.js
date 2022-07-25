const EventEmitter = require('events')

const myemitter = new EventEmitter();

 myemitter.on('newsale', () => {
    console.log('newsale  received');
})
myemitter.on('newsale', () => {
    console.log('Jobanpreet bought a shirt');
 })
 

 myemitter.emit('newsale');
