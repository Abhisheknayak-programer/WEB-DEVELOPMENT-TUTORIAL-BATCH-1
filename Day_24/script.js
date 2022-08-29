// FUNCTION DECLARATIONS
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 5));
console.log(sum(12342, 8765));
console.log(sum(098762, 8655));
console.log(sum(762, 65));

const ans = sum(10, 20);
console.log(ans);

// FUNCTION EXPRESSION
const mul = function (a, b, c, d) {
  return a * b * c * d;
};

let value = mul(1, 2, 3, 4);
console.log(value);

// VOID FUNCTIONS
const greet = function (name) {
  console.log("Good Morning!");
  console.log(name);

  let a = 27;
  let b = 3;
  console.log("The ans of sum of the above numbers is", a + b);
};

let name = "Abhishek Nayak";
greet(name);

// ARROW FUNCTIONS
const sub = (a, b) => {
  return a - b;
};

const newAns = sub(5, 3);
console.log(newAns);

// Complex Calculations using functions
const func = function (a, b) {
  let mul = a * b;
  let a_square = a * a;
  let b_square = b * b;
  let sub = a_square + b_square - mul;
  console.log("Ans is : ", sub);
};

func(12, 13);

// ARRAY
let brindhasFriends = ["lizzie", "Akhil", "Manas", "Akshara"];
console.log(brindhasFriends[0]);
console.log(brindhasFriends.length);

// Itterate Array Values
for (let i = 0; i < brindhasFriends.length; i++) {
  console.log("My Freind Name is : ", brindhasFriends[i]);
}

// Homework
// 1. Write a function which takes two input and gives the output for (+,-,/,*)
// 2. Write a function which takes one input and returns the square of that number
// 3. Write your school grades inside the array and calcualte the sum of that array
// 4. Write some random numbers inside the array and then print the (+,-,/,*) operations for that

function summ(a, b) {
  return a + b;
}

let num = [1, 2, 3, 4, 5];
const val = summ(num[0], num[4]);
console.log(val);
