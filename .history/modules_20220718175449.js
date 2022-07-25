// console.log(arguments)
// console.log(require('module').wrapper)


// by making class and exporting it 
const C = require('./test-module-1')
const cal1 = new C();
console.log(cal1.add(5, 7));
// by directly adding properties to export 

console.log(require('./test-module2').add(78, 2));

// caching

require('./test-module3')()


