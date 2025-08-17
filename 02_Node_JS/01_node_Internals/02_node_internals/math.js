//  exports.add =  function add(){
//   return  a + b
// }


//  exports.sub =  function sub(){
//     return a - b
// }

const add =  function add(a,b){
  return  a + b
}


const sub =  function sub(){
    return a - b
}




// module export can only be one in a file , in other word default export
// module.exports = function(){
//     return `This is a default export`
// }


// module.exports = add;       // default export
exports.add = add           // named export

// another way to just exporting a single default 

module.exports = {
    add,
    sub
}



/* Note: 
module.exports is what gets returned from require().

exports is just a shortcut to add properties to module.exports.

You can either:

Export a single thing: module.exports = add

Export multiple things: exports.add = add; exports.sub = sub
*/ 

