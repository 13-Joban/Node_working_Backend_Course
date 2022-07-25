const EventEmitter = require('events')

const myemitter = new EventEmitter();



 myemitter.on('newsale', () => {
    console.log('Jobanpreet  purchased a shirt');
 })

 myemitter.on('newsale', () => {
    console.log('Jobanpreet2  purchased a shirt');
 })
 myemitter.on('newsale', () => {
    console.log('newsal received');
})

 myemitter.emit('newsale');
