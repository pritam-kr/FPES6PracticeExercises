// Given an array. Write a function to get the
// sum of all elements which are greater than 50.

const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

// Your output should be: 190

// const getSum = num => num >50

const getSum = (sum, currentValue) =>
  currentValue > 50 ? sum + currentValue : sum;

arr.reduce(getSum, 0);
