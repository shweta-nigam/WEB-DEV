// 19th Sep 2025

// print table 3 times
// ex: 1 x 1 = 1, 1 x 2 = 2, 1 x 3 = 3
//  --  2 x 1 = 2, 2 x 2 = 4, 2 x 3 = 6
// same

for (let i = 1; i <= 3; i++) {
    console.log(i, "time");
    for (let j = 1; j <= 3 ; j++) {
       console.log(`${i} x ${j} = ${i*j}`);    
    }
}

// output :-
// 1 time
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 2 time
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 3 time
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
