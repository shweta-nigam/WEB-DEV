
//1.
setTimeout(() => {console.log("setTimeout")},0);
setInterval(() =>  console.log("setInterval"), 0);
setImmediate(()=>console.log("setImmediate"))
process.nextTick(()=> console.log("nextTick"))
console.log("Hii");

// output :-  Hii, setTimeout , setInterval, setImmediate , nextTick  // but setImmedaite can come on second line
// explaination :-
/*
- first top level code will execute ex:- console.log("Hii")
- second process.nextTick callbacks run right after the current synchronous code, but before the event loop moves on to handle timers, I/O, etc.
- setTimeout schedule with delay 0 -> goes to timer phase
- setInterval schedule with delay 0 -> also goes to timer phase
    ---- setInterval re-schedules itself automatically every time its callback is executed.
    ---- Since its delay is 0, it’s eligible to run on every loop iteration (timers phase).
- setImmediate schedule -> goes to check phase

Event loop roughly works in phases:
[ timers phase ] → [ pending callbacks ] → [ poll ] → [ check ] → [ close callbacks ]

In Summary:-

Hii                ← sync code
nextTick           ← microtask, runs before event loop
setTimeout         ← first timers phase
setInterval        ← first timers phase
setImmediate       ← check phase

Then next loop:
setInterval
and keeps repeating

*/


//2. 
setTimeout(() => console.log("setTimeout"),0);
setInterval(() =>  console.log("setInterval"),3000);
setImmediate(()=>console.log("setImmediate"))
process.nextTick(()=> console.log("nextTick"))
console.log("Hii");
// hii , nextTick ,settimeout or setImmediate(depending on the node internals), setInterval(at least aster 3) then keeps repeating after3s


//3.
console.log("start");
setImmediate(()=> console.log("setImmediate"))
setTimeout(()=> console.log("setTimeout"),0)
console.log("End");
// output: Start, End, setTimeout ,setImmediate(order may vary of the last 2 code)

/* Explanation:-
The event loop order is fixed, but the timing of when you add callbacks to the queues (top-level vs. inside I/O) decides the observed order, so the output "may vary". 

That’s why tutorials and docs say “the order is not guaranteed” — because your real-world code might be running in top-level, inside I/O, after a Promise, etc., which changes which phase sees the callback first.
*/

