// File System
const fs = require('fs')
const path = require('path')
const { fileURLToPath } = require('url')

// fs.mkdir(path.join(__dirname, "test"), (err) => {
//     if (err) {
//         throw err
//     }
//     console.log("Dir Created Successfully")
// })

const filePath = path.join(__dirname, "test", "text.txt")

// fs.appendFile(filePath, "\nHello Again from Text", err => {
//     if (err) {
//         throw err
//     }
//     console.log("Dir Created Successfully")

// })

fs.readFile(filePath, "utf-8", (err, content) => {
    if (err) {
        throw err
    }
    // const data = Buffer.from(content)
    // console.log("content", data.toString())
    console.log(content)
})