setTimeout(() => {
    console.log('Timer expired')
}, 0)
setImmediate(() => {
    console.log('Immediate expired')
})

