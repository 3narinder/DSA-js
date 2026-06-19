//? ===========================================================
//? Complexity Foundation and visualization : BigO notation
//? ===========================================================

//************ O(n) *************/
//? Execution time of algorithm grows linearly in proportion to the size of the input data (n)

// const groceries = ["milk", "bread", "eggs", "flour", "sugar", "biscuits"];

// const findItem = (arr, item) => {
//   //* O(n)
//   if (arr[i] === item) {
//     console.log(`Found:${item} at ${i} position`);
//   }

//   //*O(n)

//   if (arr[j] === item) {
//     console.log(`Found:${item} at ${j} position`);
//   }

//   //? its n + n = 2 -> O(2n), but we drop constant during computation so its remains O(n)
// };

//************ O(1):constant *************/
//?constant time signifies the execution time of an algorithm remains constant regardless of the input size. we know the location of the object/element, so growth of data has no effect on time complexity

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const getElement = (arr, index) => arr[index];

// console.log(getElement(numbers, 3));

//************ O(n^2): Quadratic *************/
//? algorithm's execution time grows quadratically with the size onf the input data (n). Matching/compare each item with one another to fin specific pair. E.G -> Nested Loop
// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const findPairs = (arr) => {
//   //? O(n^2)
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       console.log(`Pair: [${arr[i]}, ${arr[j]}]`);
//     }
//   }

//   //? O(n)
//   for (let k = 0; k < arr.length; k++) {
//     console.log(`...... ${arr[k]}`);
//   }
// };

// findPairs(numbers);

//? if we combined all O operation it become O(n^2 + n)
//? O(n^2) is Dominant term
//? "n" is a Non-Dominant term
//? So we remove the non-dominant term and we're only left with O(n^2)
//? This way, we simplify pur bigO

//************ O(log n): *************/
//? usually user in divide and rule method. Divide the problems is two or three.

//! P-1 : Simple Array search

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const findElement = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return `Found ${arr[i]} at ${i}`;
//     }
//   }
//   return `${target} not found`;
// };

// console.log(findElement(numbers, 12));
