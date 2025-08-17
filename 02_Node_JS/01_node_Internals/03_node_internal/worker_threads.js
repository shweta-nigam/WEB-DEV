// Read :-  Event loop blog on node.js website
// Learn :- process.next.__   (from same blog) 
// After reading blog watch cohort video on the Node internals again.





//1.
// const fs1 = require("fs");
// setTimeout(() => console.log("Set Timeout"), 0);

// setImmediate(() => console.log("Set Immediate"));

// fs1.readFile("sample.text", "utf-8", function (err, data) {
//   // subjective: depending on the file size
//   setTimeout(() => console.log("Set Timeout inside FS 1"), 0);
//   setImmediate(() => console.log("Immediate inside FS 1"));
// });

// console.log("Hi");
// output:-   through node process
// Hi
// Set Timeout
// Set Immediate
// Immediate inside FS 1
// Set Timeout inside FS 1

//2
const fs = require("fs");
const crypto = require("crypto");

setTimeout(() => console.log("Set Timeout"), 0);

setImmediate(() => console.log("Set Immediate"));

process.env.UV_THREADPOOL_SIZE = 10           // thread pool worker's number 

fs.readFile("sample.text", "utf-8", function (err, data) {
  // subjective: depending on the file size
  setTimeout(() => console.log("Set Timeout inside FS 1"), 0);
  setImmediate(() => console.log("Immediate inside FS 1"));

const start = Date.now()

  crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}ms]: Password 1 Hashed`);
  });
  crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}ms]: Password 2 Hashed`);
  });
  crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}ms]: Password 3 Hashed`);
  });
  crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}ms]: Password 4 Hashed`);
  });
  crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}ms]: Password 5 Hashed`);
  });
  crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}ms]: Password 6 Hashed`);
  });
});

console.log("Hello");

// This proves that node has 4 worker in thread pool. As 4 hashed password takes approx same time whereas the moment we add extra hash it takes almost double time hence proving 4 worker of thread pool.



//****************         important  

// Can you increase-decrease the no. of workers of thread pool?   ----> yes
// process.env.UV_THREADPOOL_SIZE = 1


// max thread pool of node can be up to 1024.

// While the default is 4, the maximum size of this thread pool can be increased up to 128 threads by setting the UV_THREADPOOL_SIZE environment variable before launching the Node.js application.


