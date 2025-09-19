// 19th sep 2025

// print triangle

function printTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let star = "";
    // console.log("when i =", i);
    for (let j = 1; j <= i; j++) {
      star += "*"    // to attach something at the end of the string we use +=
    }
    console.log(star);
  }
}

printTriangle(3);
