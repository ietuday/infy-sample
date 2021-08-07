const fs = require('fs')

const data = fs.readFileSync('sample.txt').toString()

// console.log(data.toString())
const dataStrings = data.split(' ')
console.log(dataStrings)
console.log(data)
let data_obj = {}
for (let index = 0; index < dataStrings.length; index++) {
    const element = dataStrings[index];
    console.log(element)
    console.log(countOccurences(data, element))
    data_obj[element] = countOccurences(data, element)
}

console.log(data_obj)
function countOccurences(string, word) {
    return string.split(word).length - 1;
 }