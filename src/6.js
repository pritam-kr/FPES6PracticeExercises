// Given an array. Write a function to
//find the product of all elements which are even.

const arr = [1, 2, 3, 7, 5, 6, 8, 9];

// Your output should be: 96

const getProduct = (num, currentValue) =>
  currentValue % 2 === 0 ? num * currentValue : num;

arr.reduce(getProduct);
