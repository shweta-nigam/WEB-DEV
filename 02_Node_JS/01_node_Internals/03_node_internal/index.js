const fs = require("fs")


// 1.
setTimeout(()=> console.log("Set Timeout"),0)

setImmediate(()=> console.log("Set Immediate"))

console.log("Hello");

// sequence : -   Hello ,  Set Timeout, Set Immediate

//2.
setTimeout(()=> console.log("Set Timeout"),0)

setImmediate(()=> console.log("Set Immediate"))

// sequence : -     Set Immediate , Set Timeout

/* Note: 
setTimeout(fn, 0) → runs in the Timers phase.

setImmediate(fn) → runs in the Check phase.

Order depends on event loop phases and what is happening between them.

Node.js does NOT guarantee whether setImmediate or setTimeout with 0 ms fires first.
*/