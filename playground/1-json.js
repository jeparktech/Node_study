const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'

// }

// const bookJSN = JSON.stringify(book)
// // console.log(bookJSN)
// // const parsedData = JSON.parse(bookJSN)
// // console.log(parsedData)
// fs.writeFileSync('1-json.json', bookJSN)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.title)


const databuffer = fs.readFileSync('1-json.json')
const dataJSON = databuffer.toString()
var data = JSON.parse(dataJSON)

data.name = 'Jeongwon'
data.age = '23'

console.log(data)
const newDataJSON = JSON.stringify(data)
console.log(newDataJSON)
fs.writeFileSync('1-json.json', newDataJSON)
