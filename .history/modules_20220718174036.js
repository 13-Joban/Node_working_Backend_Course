// console.log(arguments)
// console.log(require('module').wrapper)

const C = require('./test-module-1')
const cal1 = new C()
console.log(C.add(5, 7));