 const fs = require('fs');
const crypto = require('crypto')

const start  = Date.now()
process.env.TZ_SIZZ
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

    crypto.pbkdf2('password', 'salt', 5000, 1024, 'sha512',  () => {
        console.log('Password1 encrypted in ' ,  Date.now() - start ,  'ms');
    })
    crypto.pbkdf2('password', 'salt', 5000, 1024, 'sha512',  () => {
        console.log('Password2 encrypted in ' ,  Date.now() - start ,  'ms');
    })
    crypto.pbkdf2('password', 'salt', 5000, 1024, 'sha512',  () => {
        console.log('Password3 encrypted in ' ,  Date.now() - start ,  'ms');
    })
    crypto.pbkdf2('password', 'salt', 5000, 1024, 'sha512',  () => {
        console.log('Password4 encrypted in ' ,  Date.now() - start ,  'ms');
    })




    crypto.pbkdf2('password', 'salt', 5000, 1024, 'sha512',  () => {
        console.log('Password1 encrypted in ' ,  Date.now() - start ,  'ms');
    })
    crypto.pbkdf2('password', 'salt', 5000, 1024, 'sha512',  () => {
        console.log('Password2 encrypted in ' ,  Date.now() - start ,  'ms');
    })
    crypto.pbkdf2('password', 'salt', 5000, 1024, 'sha512',  () => {
        console.log('Password3 encrypted in ' ,  Date.now() - start ,  'ms');
    })
    crypto.pbkdf2('password', 'salt', 5000, 1024, 'sha512',  () => {
        console.log('Password4 encrypted in ' ,  Date.now() - start ,  'ms');
    })
    crypto.pbkdf2('password', 'salt', 5000, 1024, 'sha512',  () => {
        console.log('Password1 encrypted in ' ,  Date.now() - start ,  'ms');
    })
    crypto.pbkdf2('password', 'salt', 5000, 1024, 'sha512',  () => {
        console.log('Password2 encrypted in ' ,  Date.now() - start ,  'ms');
    })
    crypto.pbkdf2('password', 'salt', 5000, 1024, 'sha512',  () => {
        console.log('Password3 encrypted in ' ,  Date.now() - start ,  'ms');
    })
    crypto.pbkdf2('password', 'salt', 5000, 1024, 'sha512',  () => {
        console.log('Password4 encrypted in ' ,  Date.now() - start ,  'ms');
    })
    
    
    

})
console.log('Top level code executed')