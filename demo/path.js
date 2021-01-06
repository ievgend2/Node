const path = require('path')
const chalk = require('chalk')

console.log(chalk.blue("File Name:", path.basename(__filename)))
console.log(chalk.blue("Dir Name:", path.dirname(__filename)))
console.log(chalk.blue("File Type:", path.extname(__filename)))

console.log("Parse:", path.parse(__filename))

console.log(chalk.blue(path.join(__dirname, 'server', 'index.html')))