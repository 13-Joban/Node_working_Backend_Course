 const fs = re
setTimeout(() => {
    console.log('Timer expired')
}, 0)
setImmediate(() => {
    console.log('Immediate expired')
})

console.log('Top level code executed')