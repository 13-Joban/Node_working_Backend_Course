const EventEmitter = require('events')

const myemitter = new EventEmitter();



 

 myemitter.on('newsale', () => {
    console.log('newsale  received');
})

 myemitter.emit('newsale');
