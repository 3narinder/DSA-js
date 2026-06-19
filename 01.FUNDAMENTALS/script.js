//? ========================
//? FUNDAMENTALS
//? ========================

//! Q1: Sum of integers
// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(10, 12));

//! Q1: Relation between string and number
// let a = 3; //?number
// let b = "3"; //?string

//! Q3: Sum with message
// let a = 10;
// let b = 20;

// console.log("sum of 10 and 20:" + a + b); //? concatenate, because one operant is string
// console.log("sum of 10 and 20:" + (a + b)); //? Using brackets to prioritize addition;

// console.log(a + b + " " + "is the sum of 10 and 20"); //? we get 30 but as one of the operant is string the whole operation results become string
// console.log(`sum of 10 and 20: ${a + b}`); //? that's why JS introduced ``

//! Q:

//!===============================================================
//! Q1: SUM: add two integers, multiple integers, or an array
//!===============================================================

//******* 1. Add two integers ******/
// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(10, 12));

//******* 2. Add N numbers ******/

//? Method 1

// const sum = (...num) => {
//   return num.reduce((acc, val) => acc + val, 0);
// };
// console.log(sum(10, 22, 3, 4, 5, 5, 55));

//******* 3. Sum Array ******/

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

//!===============================================================
//! Q2: Second largest number
//!===============================================================

//******* 1. Second largest number from a string eg:"dh456839js" ******/

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

//******* 2. Second largest number from an array ******/

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
//! Q3: Palindrome Number
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
//! Q4: Reverse Integers
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

//!=====================================================
//! Q4: Count negative numbers in an array
//!=====================================================

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

//!=====================================================
//! Q5: smallest number in array
//!=====================================================

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

//!=====================================================
//! Q5: smallest number in array
//!=====================================================

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

//! Q: create an array with a 5 students names, after that create a function which takes 2 parameters (alStudents & studentName) iterate over all students and find that specific user "studentName"

//* Algorithm to find specific user form array
// const students = ["jack", "jill", "marry", "john", "martha"];
// const findStudent = (allStudents, studentName) => {
//   for (let i = 0; i < allStudents.length; i++) {
//     if (allStudents[i] === studentName) {
//       console.log(`Found ${studentName} at ${i} position`);
//     }
//   }
// };

// findStudent(students, "john");
