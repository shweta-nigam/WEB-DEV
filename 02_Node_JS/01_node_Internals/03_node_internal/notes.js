/* --------------------------            Node Architect             ---------------------------------------------*/


// Node process :-
// 1. project init
// 2. Top level code -> Top level code is the code which is not a callback, inside a function and inside a module.
//  -> the first thing executes as 'require'(topological sort) ---- to compile external module 
// 3. then event callbacks register  
// 4. Event loop (nothing but a while true loop)
//  then start code execution.  


// Work of Event loop (phases):-
// 1. checks expired Timer Callbacks -> Task Queue 
//           ---->  we only have two timers -- setTimeout, Setinterval ( setImmediate is not a timer!)
// 2. IO pooling --> If your system/code works on input-output mechanism/resource then their cb is run.(ex: fs module - writing file, retrieving something )
//3.  run setImmediate (not available in browser, It's a part of Node( so yeah It's brother of node 😂.) )
// 4. runs Close Callbacks ---> ex: If you wanna do something when server closes or when server exits.(clean up functions)
// 5. Then asks if everything is done ? If yes then it break the loop and executions stop, if No then it again runs the loop until everything is taken care of.
//  Notice: app.listen never ends because all the routes you have made are still pending and any request can come anytime.(That's why teacher say that server is nothing but a while true infinite loop) 



// Execution of Event loop(while true loop):- shorthand of above 
// 1. runs all cb of timers
// 2. if fs work is done , run their cb
// 3. run setImmediate
// 4. run close callbacks


// phases of event loop (same as both above , but more concise)
// phase 1: Expired Timer callbacks
// phase 2: IO pooling
// phase 3: setImmediate Callbacks
// phase 4: close callbacks
// if something remain run it again. 



//Thread Pools:-
// node mostly use its main thread. But CPU intensive task is handled through thread pools.
// CPU intensive tasks are those tasks which require good amount of compute power.
// Ex: cryptography - Hashing Password.
// If we run CPU intensive work in event loop , it can block the loop.

// Thread pools are known as worker threads. 







// notes:-
// All the work happening in event loop is happening inside 'main thread'.
//  Botel neck -> congestion of data
// event callbacks -> a function in a script that monitoring scripting client calls in response to an event.
//  Event Driven Architecture ->  /get , /post, res.send  (callback on an event)
// node's and browser's js may work same but their internal engine are totally different from each other.
            // ----> settimeout and setinterval are part of browser not js. also task queue and microtask.(Thats why they don't work in node.)
            // -----> fs module , require only works inside node and not in browser.
            // ------> fetch -> which is used to do api calls only work in browser.Because it is the work of browser to do dns query, caching, asking operating system. 
            // ------> To do api calls in node axios needs to be installed.

// Api of js and expected output is same in node and browser but their internals work differently.
         // ex: -- setTimeout(cb,millisecond)    ---> this is Api/syntax
//Therefor the way JAVASCRIPT is written is the same in node and browser but 'on top features' vary in both environment.
// In Conclusion :- some Apis in node and browser are same but not their internals.
                //  - whereas some apis are only available in a particular environment.(Either in node or browser)

