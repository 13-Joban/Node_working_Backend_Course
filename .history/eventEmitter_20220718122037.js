const EventEmitter = require('events')

const myemitter = new EventEmitter();

myemitter.emit('newsale');
myemitter.on('newsalse' , () =>{
    console.log('newsals received');
})
//  myemitter.on('newsale', () => {
//     console.log('Jobanpreet  purchased a shirt');
//  })
