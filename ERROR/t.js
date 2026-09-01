const birthYear = 1990;
// ERROR! You can't change a const.
birthYear = 1991;

let myNumber = 5;
// ERROR! myNumber is a number, not a function. You can't "call" a number!
myNumber();

let myString = null;
// ERROR! null doesn't have a length. You can only check the length of strings or arrays!
console.log(myString.length);
