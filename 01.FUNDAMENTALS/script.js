//? ==================================
//? *******  FUNDAMENTALS*******
//? ==================================

//! Q1: Sum of integers
// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(10, 12));

//! Q2: Relation between string and number
// let a = 3; //?number
// let b = "3"; //?string

//! Q3: Sum with message
// let a = 10;
// let b = 20;

//! Q4: Type coercion
// console.log("1" + 1); //?11 -> if one operant is string, + convert other to string
// console.log("1" - 1); //? 0, no type coercion on - * /

// console.log("sum of 10 and 20:" + a + b); //? concatenate, because one operant is string
// console.log("sum of 10 and 20:" + (a + b)); //? Using brackets to prioritize addition;

// console.log(a + b + " " + "is the sum of 10 and 20"); //? we get 30 but as one of the operant is string the whole operation results become string
// console.log(`sum of 10 and 20: ${a + b}`); //? that's why JS introduced ``

//! Q5: Swap Two variable
// let a = 10;
// let b = 20;

//? Method 1: using third variable
// let c = a; //? c=10, a=10
// a = b; //? a=20, b=20
// b = c; //? b=10

//? Method 2: without using third variable
// a = a + b; //? a=30
// b = a - b; //? b=10, 30 - 20 = 10
// a = a - b; //? a=20, 30 - 10 =20

//? Method 3: array swap
// [a, b] = [b, a];

// console.log(`a:`, a);
// console.log(`b:`, b);

//! Q6: unary operator puzzle 1
// let i = 11;
// i = i++ + ++i; //? 24
// i = ++i + ++i; //? 25
// console.log(i);

//! Q7: unary operator puzzle 2
// let a = 11,
//   b = 22;

// let c = a + b + a++ + b++ + ++a + ++b;
//? 11 + 22 + 11 (11 used then increment to 12) + 22 (22 used then increment to 23) + 13 (12 increment to 13 and used) + 24 (23 increment to 24 then used)

//console.log(a); //? 13
//console.log(b); //? 24
//console.log(c); //? 103

//! Q8: unary operator with boolean
//let b = true;
//b++; //? type coercion: b become 1 then increment
//console.log(b); //? 2

//! Q9: using variable before post unary operation
// let a = 10;
// console.log(a++); //?10 : a is used before increment
// console.log(a); //?11

//! Q10: Random 4 digit otp
// console.log(Math.trunc(Math.random() * 9000 + 1000)); //? 1000 < n < 10000

//! Q11: area of rectangle
let a = 10,
  b = 12;
// console.log(a * b);

//! Q12: parameter of rectangle a(a+b)
// console.log(2 * (a + b));

//!Q13: area of triangle

//*=============================================
//*  ******* LEET CODE QUESTIONS *******
//*=============================================

//!============================
//! Q1: SUM: add two integers
//!============================

// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(10, 12));

//!==============================
//! Q2 Add N numbers
//!==============================

//? Method 1

// const sum = (...num) => {
//   return num.reduce((acc, val) => acc + val, 0);
// };
// console.log(sum(10, 22, 3, 4, 5, 5, 55));

//!==============================
//! Q3 Sum Array
//!==============================

//?using reduce method
// const sumArr = (arr) => {
//   return arr.reduce((acc, val) => acc + val, 0);
// };

//? using For loop

// const sumArr = (arr) => {
//   let total = 0;

//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }

//   return total;
// };
// console.log(sumArr([1, 2, 3, 4]));

//!====================================================
//! Q4: Second largest number from a random string
//!===================================================

// const secondHighest = (str) => {
//   let first = -1;
//   let second = -1;

//   for (let ch of str) {
//     if (ch >= "0" && ch <= "9") {
//       let num = Number(ch);

//       if (num > first) {
//         second = first;
//         first = num;
//       } else if (num < first && num > second) {
//         second = num;
//       }
//     }
//   }

//   return second;
// };

// console.log(secondHighest("dh456839js"));

//!============================================
//! Q5: Second largest number from an array
//!============================================

// const secondLargestNumber = (arr) => {
//   let first = -1;
//   let second = -1;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > first) {
//       second = first;
//       first = arr[i];
//     } else if (arr[i] < first && arr[i] > second) {
//       second = arr[i];
//     }
//   }

//   return second;
// };
// console.log(secondLargestNumber([1, 2, 3, 4, 55, 6, 44]));

//!=======================
//! Q6: Palindrome Number
//!=======================

// const isPalindrome = (num) => {
//   const original = num;
//   let reverse = 0;
//   while (num > 0) {
//     digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
//   }

//   return reverse === original;
// };

// console.log(isPalindrome(121));

//!=======================
//! Q7: Reverse Integers
//!=======================

// const reverseInt = (num) => {
//   const sign = Math.sign(num);
//   num = Math.abs(num);

//   let reverse = 0;

//   while (num > 0) {
//     digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
//   }

//   reverse = reverse * sign;

//   if (reverse < -2147483648 || reverse > 2147483647) {
//     return 0;
//   }

//   return reverse;
// };

// console.log(reverseInt(-123));

//!==========================================
//! Q8: Count negative numbers in an array
//!==========================================

// const countNegative = (arr) => {
//   if (!Array.isArray(arr)) {
//     return false;
//   }

//   let count = 0;

//   for (const num of arr) {
//     if (typeof num !== "number" || !Number.isFinite(num)) {
//       return false;
//     }

//     if (num < 0) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countNegative([1, 2, -3, -4, 5, 6, -7]));

//!==============================
//! Q9: smallest number in array
//!==============================

// const findSmallest = (arr) => {
//   if (!Array.isArray(arr)) {
//     return false;
//   }

//   if (arr.length === 0) {
//     return false;
//   }

//   let smallest = arr[0];

//   for (const num of arr) {
//     if (typeof num !== "number" || !Number.isFinite(num)) {
//       return false;
//     }

//     if (num < smallest) {
//       smallest = num;
//     }
//   }

//   return smallest;
// };

// console.log(findSmallest([1, 2, 3, 4, 5, 6, 7]));

//!===============================
//! Q10: Largest number in array
//!===============================

// const findLargest = (arr) => {
//   if (arr.length === 0) {
//     return null;
//   }

//   if (!Array.isArray(arr)) {
//     return false;
//   }

//   let largest = arr[0];

//   for (const num of arr) {
//     if (typeof num !== "number" || !Number.isFinite(num)) {
//       return false;
//     }

//     if (num > largest) {
//       largest = num;
//     }
//   }

//   return largest;
// };

// console.log(findLargest([1, 2, 3, 4, 5, 6, 7]));

//!=============================
//! Q6: Add digits of a number
//!=============================

// function digitSum(num) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// console.log(digitSum(2345));
