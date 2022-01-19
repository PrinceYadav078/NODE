// child process is a node module used to create sub processes with in a script
// you can do different tasks with you

const cp = require('child_process')

// console.log('Trying to open Calculator')

// cp.execSync('calc')
// console.log('calculator opened')

// console.log('Trying to open vscode')
// cp.execSync('code')

// console.log('trying to open browser')
// cp.execSync('start chrome https://www.pepcoding.com/#')

let output=cp.execSync('node test.js')
console.log('output->'+ output)