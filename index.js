// (function (exports, require, module, __dirname, __filename) {

const chalk = require('chalk')
const text = require('./data')


console.log(chalk.blue(`${text}"Hello NodeJS"`))
// }) - node js wraping node code into the function with 5 params
console.log(__dirname)
console.log(__filename)