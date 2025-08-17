// ------------                           EVENT LOOP AND IT'S PHASES                     -----------          

// event loop is the heart of the node 
// there are some main phases of event loop
// phases =>  Event loop roughly works in phases:
// [ timers phase ] → [ pending callbacks ] → [ poll ] → [ check ] → [ close callbacks ]





//  1️⃣ Timers phase
// This is the phase where 'timer' that is setTimeout and setInterval callbacks are run when their time expires.

console.log("start");
setTimeout(() =>  console.log("setTimeout"), 0);
console.log("End");
// output :- start, End, setTimeout

// 2️⃣ Pending callbacks phase
//This phase runs certain system-level callbacks, usually not used directly in user code.
// But you can simulate it by triggering a socket error or by using process.binding (which is unsafe).
// So instead, know: it handles things like TCP errors.

//Example (just conceptually):

const net1 = require("net")
const socket1 = net1.connect(80,'example.com')

socket1.on('error',(err)=>{console.log("'Pending callbacks phase: socket error'")})
//If the error occurs after the connection attempt, its callback runs in the pending callbacks phase.


//3️⃣ Poll phase
// Here Node waits for incoming connections, data etc., and executes related I/O callbacks.
// Example reading a file:
const fs = require("fs");

console.log("Start");
fs.readFile(__filename,()=>{
    console.log("poll phase: fs.readFile callback")  
    console.log(__filename)
    console.log(__dirname)
});

console.log("End");
//output: Start, End, poll phase: fs.readFile callback



//4️⃣ Check phase
// where setImmediate callbacks are run 
setImmediate(()=> console.log("Check phase: setImmediate callback"))
//If you call this in top-level code, it’ll usually run after poll phase (e.g., after fs.readFile).


//5️⃣ Close callbacks phase
//Runs callbacks for things like socket.on('close') or stream.on('close').

const net = require('net')
const socket = net.connect(80, 'example.com')

socket.on('connect',()=>{
    socket.end()    // end connection, triggers close
})

socket.on('close', ()=>{
    console.log('Close callbacks phase: socket closed')
})


// 6️⃣ Microtasks queue
// process.nextTick
// Promises (.then / catch / finally)
// These run after the current operation and before event loop proceeds to next phase

console.log('start');
process.nextTick(()=> console.log('Microtask: nextTick callback'))
Promise.resolve().then(()=> console.log('Microtask: Promise.then callback'))
console.log('End');

//output:-
// start, End, Microtask: nextTick callback, Microtask: Promise.then callback



console.log('Start');
setImmediate(() => console.log('setImmediate'));
setTimeout(() => console.log('setTimeout'),0);
console.log('End')