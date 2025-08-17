const fs = require ("fs")
const math = require("./math")

fs.writeFile("./test.txt", "Hello World" , ()=> {} )

// what's the difference?
console.log(__dirname, __filename)
console.log({__dirname, __filename});

// console.log(math(2,2))
console.log(math.add(2,2))

// console.log(add());


function __require(id){

}




