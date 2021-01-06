// (function (exports, require, module, __dirname, __filename) {
const fs = require('fs')
const path = require('path')
// const chalk = require('chalk')
// const text = require('./data')


// console.log(chalk.blue(`${text}"Hello NodeJS"`))
// // }) - node js wraping node code into the function with 5 params
// console.log(__dirname)
// console.log(__filename)

const http = require('http')
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.end(data)
        })
    }
    else if (req.url === '/contact') {
        fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.end(data)
        })
    }
})
server.listen(3000, () => {
    console.log("Server is started...")
})
