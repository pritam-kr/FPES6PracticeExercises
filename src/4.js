// Given an array. Write a function that
//  takes in the given array and prints
//  only the words which are more than 5 characters in length

// Your output should be: ['repeat']
// [‘eat’, ‘sleep’, ‘repeat’, ‘code’]

const arr = ["eat", "sleep", "repeat", "code"];

const getWord = (word) => word.length > 5;

arr.filter(getWord);
