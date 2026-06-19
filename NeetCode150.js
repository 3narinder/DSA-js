//! Q1: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const nums = [1, 3, 4, 5, 6, 2];

//*----------------------------
//* Brute force method: O(n^2)
//*----------------------------

const isDuplicate = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }

  return false;
};

//*--------------------------
//* Optimal method:Sorting
//*--------------------------

console.log(isDuplicate(nums));
