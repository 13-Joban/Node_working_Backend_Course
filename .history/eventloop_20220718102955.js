 const fs = require('fs');

// setTimeout(() => {
//     console.log('Timer expired')
// }, 0)
// setImmediate(() => {
//     console.log('Immediate expired')
// })

fs.readFile('./test-file.txt' , () => {
    console.log('I/O Finished')
    console.log('----------------------')
    setTimeout(() => {
        console.log('Timer expired')
    }, 0)
    setImmediate(() => {
        console.log('Immediate expired')
    })

})
console.log('Top level code executed')