//? ============================
//? Linear Exploration: Array
//? ============================

//? 1.Create a custom array using classes and constructor method

// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
// }

// const arr1 = new MyArray();

//? 2.Custom push method:O(1)

// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }
// }

// const arr1 = new MyArray();

// arr1.push("Apple");
// arr1.push("Banana");
// arr1.push("Mango");

// console.log(arr1);

//? 3.Custom get method:O(1)

// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   get(index) {
//     return this.data[index];
//   }
// }

// const arr1 = new MyArray();

// arr1.push("Apple");
// arr1.push("Banana");
// arr1.push("Mango");

// console.log(arr1.get(2));

//? 4. custom Pop method: O(1)

// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   get(index) {
//     return this.data[index];
//   }

//   pop(item) {
//     const lastElement = this.data[this.length - 1];

//     delete this.data[this.length - 1];

//     this.length--;

//     return lastElement;
//   }
// }

// const arr1 = new MyArray();

// arr1.push("Apple");
// arr1.push("Banana");
// arr1.push("Mango");

// arr1.pop();

// console.log(arr1);

//? 5. Shift method : O(n) because of the use of for loop

// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   get(index) {
//     return this.data[index];
//   }

//   pop(item) {
//     const lastElement = this.data[this.length - 1];

//     delete this.data[this.length - 1];

//     this.length--;

//     return lastElement;
//   }

//   shift() {
//     const firstElement = this.data[0];

//     for (let i = 0; i < this.length; i++) {
//       this.data[i] = this.data[i + 1];
//     }

//     delete this.data[this.length - 1];
//     this.length--;

//     return firstElement;
//   }
// }

// const arr1 = new MyArray();

// arr1.push("Apple");
// arr1.push("Banana");
// arr1.push("Mango");

// console.log(arr1);
// console.log(arr1.shift());
// console.log(arr1);

//? 6. Delete by index method: O(n)
// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   get(index) {
//     return this.data[index];
//   }

//   pop(item) {
//     const lastElement = this.data[this.length - 1];

//     delete this.data[this.length - 1];

//     this.length--;

//     return lastElement;
//   }

//   shift() {
//     const firstElement = this.data[0];

//     for (let i = 0; i < this.length; i++) {
//       this.data[i] = this.data[i + 1];
//     }

//     delete this.data[this.length - 1];
//     this.length--;

//     return firstElement;
//   }

//   deleteByIndex(index) {
//     const item = this.data[index];

//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }

//     delete this.data[this.length - 1];

//     this.length--;

//     return item;
//   }
// }

// const arr1 = new MyArray();

// arr1.push("Apple");
// arr1.push("Banana");
// arr1.push("Mango");
// arr1.push("Cherry");
// arr1.push("Pine apple");

// arr1.deleteByIndex(2);

// console.log(arr1);

//! Q1 - Reverse the string
//?Split string into array
//?Reverse the array
//?Convert back to string

// let arr = "hello world";

//**** Method-1: using built in method -> Time O(n) , Space O(n) ****//

// const reverseStr = (str) => {
//   return str.split("").reverse().join("");
// };

//**** Method-2: using For loop -> Time O(n) , Space O(n) ****//

// const reverseStr = (str) => {
//   let result = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }

//   return result;
// };

//**** Method-3: Two pointer approach -> Time O(n) , Space O(n) ****//

// const reverseStr = (str) => {
//   let arr = str.split("");
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }

//   return arr.join("");
// };

// console.log(reverseStr(arr));

//! Q2 - Palindromes
//**** Method-1: using built in method -> Time O(n) , Space O(n) ****//

// const isPalindrome = (str) => {
//   return str.split("").reverse().join("") === str;
// };

//**** Method-2: using loop -> Time O(n) , Space O(n) ****//

// const isPalindrome = (str) => {
//   let result = "";
//   for (let i = str.length - 1; i <= 0; i--) {
//     result += arr[i];
//   }

//   return result === str;
// };

//**** Method-2: Two pointer approach-> Time O(n) , Space O(1) ****//
//? more space efficiency O(1) -> no need to store reverse string

// const isPalindrome = (str) => {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// };

// console.log(isPalindrome("abba"));

//! Q3 - Reverse Integer
//? convert number to string (toString)
//? Convert string to array (split(""))
//? Reverse the string(reverse())
//? Convert array back to string(join())
//? Convert string to number(Number())
//? Return the number

//**** Method-1: using built in method -> Time O(n) , Space O(n) ****//
// const reverseNumber = (num) => {
//   return Number(num.toString().split("").reverse().join(""));
// };

//**** Method-2: using For loop -> Time O(n) , Space O(n) ****//
// const reverseNumber = (num) => {
//   let result = "";
//   let numStr = num.toString();

//   for (let i = numStr.length - 1; i >= 0; i--) {
//     result += numStr[i];
//   }

//   return Number(result);
// };

//**** Method-3:BEST-> without converting to string -> Time O(n) , Space O(1) : no extra string or array ****//

// const reverseNumber = (num) => {
//   let reverse = 0;

//   while (num > 0) {
//     const digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
//   }

//   return reverse;
// };

// console.log(reverseNumber(345));

//! Q4 - Sentence capitalizations
//**** Method-1: using built in method/Most common method -> Time O(n) , Space O(n) ****//

// const sentenceCapitalization = (str) => {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// };

//**** Method-2: using for loop -> Time O(n) , Space O(n) ****//

// const sentenceCapitalization = (str) => {
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }

//   return words.join(" ");
// };

//**** Method-3: without using any method like split. map or join -> Time O(n) , Space O(n) ****//

// const sentenceCapitalization = (str) => {
//   let result = str[0].toUpperCase();

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === " ") {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }

//   return result;
// };

// console.log(sentenceCapitalization("this is a man"));

//! Q5: FizzBuzz
// const fizzBuzz = (n) => {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`${i} FizzBuzz`);
//     } else if (i % 3 === 0) {
//       console.log(`${i} Fizz`);
//     } else if (i % 5 === 0) {
//       console.log(`${i} Buzz`);
//     } else {
//       console.log(i);
//     }
//   }
// };

// console.log(fizzBuzz(15));

//! Q6: MaxProfit

// const maxProfit = (prices) => {
//   let minPrice = prices[0];
//   let maxProfit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     const currentPrice = prices[i];
//     minPrice = Math.min(minPrice, currentPrice);

//     const potentialProfit = currentPrice - minPrice;

//     maxProfit = Math.max(maxProfit, potentialProfit);
//   }

//   return maxProfit;
// };

// const sharePrices = [25, 20, 22, 32, 12, 44, 54, 32];

// console.log(maxProfit(sharePrices));

//! Q7- Array Chunks
//?Write a function that takes an array and a chunk size as input. The function should return a new array where the original array is split into chunks of the specified size. E:G ([,1,2,3,4,5,6],2) -> [[1,2],[3,4],[5,6]]

// const Array1 = [1, 2, 3, 4, 55, 6, 7, 7, 7, 7, 3];

//**** Method-1: using for loop and slice method -> Time O(n) , Space O(n) ****//

// const arrayChunks = (arr, chunk) => {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i += chunk) {
//     newArr.push(arr.slice(i, i + chunk));
//   }

//   return newArr;
// };

//**** Method-2: using while loop and slice method -> Time O(n) , Space O(n) ****//

// const arrayChunks = (arr, chunk) => {
//   const newArr = [];

//   let i = 0;

//   while (i < arr.length) {
//     newArr.push(arr.slice(i, i + chunk));
//     i += chunk;
//   }

//   return newArr;
// };

//**** Method-3: using just while loop-> Time O(n) , Space O(n) ****//

// const arrayChunks = (arr, size) => {
//   const newArr = [];
//   let chunk = [];

//   for (let i = 0; i < arr.length; i++) {
//     chunk.push(i);

//     if (chunk.length === size) {
//       newArr.push(chunk);

//       chunk = [];
//     }
//   }

//   if (chunk.length) {
//     newArr.push(chunk);
//   }

//   return newArr;
// };

// console.log(arrayChunks(Array1, 3));

//! Q8- Two sums
//?A list of numbers and a target number. We have to fund two numbers in that list that add up to the target number. We also need to tell which positions (indexes) those numbers are at in the list.

// const numbers = [11, 2, 3, 43, 5, 6, 7, 4, 2, 1, 2, 3, 4, 5, 6, 7];

//**** Method-1: using nested for loops -> Time O(n^2) Quadratic , Space O(1) ****//

// const twoSums = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return `${[arr[i], arr[j]]} at ${[i, j]}`;
//       }
//     }
//   }
// };

//**** Method-2: Optimal solution using map method -> Time O(n) , Space O(n) ****//
// const twoSums = (arr, target) => {
//   const map = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     const complement = target - arr[i];

//     if (map.has(complement)) {
//       const j = map.get(complement);

//       return {
//         index: [j, i],
//         numbers: [arr[j], arr[i]],
//         sum: [arr[j] + arr[i]],
//       };
//     }

//     map.set(arr[i], i);
//   }

//   return `Numbers not found, no Numbers has sun ${target}`;
// };

// console.log(twoSums(numbers, 22));

//! Q9: Best Time to Buy/Sell Stock (single-pass tracking)

//**** Method-1: Optimal Solution: Single-Pass Greedy Tracking (The Winner) -> Time O(n) Quadratic , Space O(n) ****//

// function maxProfit(prices) {
//   let minPrice = Infinity;
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i];
//     } else if (prices[i] - minPrice > maxProfit) {
//       maxProfit = prices[i] - minPrice;
//     }
//   }

//   return maxProfit;
// }

//**** Method-2:Double loop Bruit force -> Time O(n^2) Quadratic , Space O(1) ****//

// function maxProfitBruteForce(prices) {
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       const profit = prices[j] - prices[i];
//       if (profit > maxProfit) {
//         maxProfit = profit;
//       }
//     }
//   }
//   return maxProfit;
// }

//! Q10: Valid Anagram: Example: "listen" and "silent" are anagrams. "rat" and "car" are not.

//* Time Complexity: O(N) | Space Complexity: O(1) */

const isAnagram = (s, t) => {
  //? Length check
  if (s.length !== t.length) return;

  //?create and empty object
  const charMap = {};

  //?Building a frequency map from string s
  for (const char of s) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  //? matching and decrementing using string
  for (const char of t) {
    if (!charMap[char]) {
      return false;
    }

    charMap[char]--;
  }

  return true;
};

console.log(isAnagram("aabb", "abab"));
