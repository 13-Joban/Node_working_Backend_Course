 const fs = require('fs');
const crypto = require('crypto')


setTimeout(() => {
    console.log('Timer1 expired')
}, 0)
setImmediate(() => {
    console.log('Immediate1 finished')
})

fs.readFile('./test-file.txt' , () => {
    console.log('I/O Finished')
    console.log('----------------------')
    setTimeout(() => {
        console.log('Timer2 expired')
    }, 1000)
    setTimeout(() => {
        console.log('Timer3 expired')
    }, 3000)
    setImmediate(() => {
        console.log('Immediate2 finished')
    })

    process.nextTick(() => {
        console.log('NextTick completed');
    })
    
    
    

})
console.log('Top level code executed')