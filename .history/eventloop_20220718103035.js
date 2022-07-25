 const fs = require('fs');

setTimeout(() => {
    console.log('Timer1 expired')
}, 0)
setImmediate(() => {
    console.log('Immediate1 expired')
})

fs.readFile('./test-file.txt' , () => {
    console.log('I/O Finished')
    console.log('----------------------')
    setTimeout(() => {
        console.log('Timer2 expired')
    }, 0)
    setImmediate(() => {
        console.log('Immediate2 expired')
    })

})
console.log('Top level code executed')