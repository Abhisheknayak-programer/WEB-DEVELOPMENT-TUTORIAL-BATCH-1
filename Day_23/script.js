// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");
// console.log("Abhishek");

// LOOPS
// Declaration || Condition || Inc or Dec
let ans = 0;
for (let i = 1; i < 5; i++) {
  ans = ans + i;
  // 1 = 0 + 1 (Loop 1)
  // 3 = 1 + 2 (Loop 2)
  // 6  = 3 + 3 (Loop 3)
  // 10  = 6 + 4 (Loop 4)
}

console.log(ans);

// MODULO Operator %
console.log(14 % 2);
console.log(14 % 6);
console.log(18 % 6);
console.log(29 % 9);

// sum of even number
console.log(14 % 2); // === 0 then its even number
console.log(13 % 2); // === 1 then its odd number

// 2 + 4 + 6 + 8 + 10 + ...... + 100 (ans)
// 1 + 3 + 5 + 7 + 9 + 11 + 13 + ..... (ans)

let evenAns = 0;
let oddAns = 0;

for (let i = 1; i < 101; i++) {
  if (i % 2 === 0) {
    evenAns = evenAns + i;
  } else {
    oddAns = oddAns + i;
  }
}

console.log(evenAns);
console.log(oddAns);
console.log(evenAns + oddAns);
