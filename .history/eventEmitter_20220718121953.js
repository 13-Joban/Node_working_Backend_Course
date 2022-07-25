const EventEmitter = require('events')

const myemitter = new EventEmitter();


myemitter.on('newsalse' , () =>{
    console.log('newsalse received');
})
//  myemitter.on('newsale', () => {
//     console.log('Jobanpreet  purchased a shirt');
//  })
