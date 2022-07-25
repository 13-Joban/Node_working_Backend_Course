const EventEmitter = require('events')

const myemitter = new EventEmitter();



 

 myemitter.on('newsale', () => {
    console.log('newsale  received');
})
myemitter.on('newsale', () => {
    console.log('Jobanpreet  purchased a shirt');
 })


 myemitter.emit('newsale');
