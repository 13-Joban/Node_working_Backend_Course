const EventEmitter = require('events')

const myemitter = new EventEmitter();



 myemitter.on('newsale', () => {
    console.log('Jobanpreet  purchased a shirt');
 })

 myemitter.on('newsale', () => {
    console.log('Jobanpreet2  purchased a shirt');
 })
 myemitter.on('newsalse', () => {
    console.log('newsals received');
})

 myemitter.emit('newsale');
