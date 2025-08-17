//----------------         Node Internals   ----------------------------------

//Notes:-
//1. node.js is a JavaScript runtime environment.
//2. node.js uses V8 engine(chrome's) to compile and run code.
//3. libuv a c library handles asynchronous I/O , thread pool and event loop
//4. tread pool runs code that cannot be non-blocking(filesystem,DNS).

console.log("hi");
