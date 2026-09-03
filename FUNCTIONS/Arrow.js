const addNumbers = (a, b) => {
  return a + b;
};


const user = {
  name: "Alice",

  // A regular function on an object
  greetRegular: function () {
    console.log("Hi, I am " + this.name); // Works! "this" is the user object.

    // But if we put a regular function inside a timer...
    setTimeout(function () {
      console.log("Later, I am " + this.name);
      // Output: "Later, I am undefined". It forgot who 'this' was!
    }, 1000);
  },

  // An arrow function on an object
  greetArrow: function () {
    // If we use an arrow function inside the timer instead...
    setTimeout(() => {
      console.log("Later, I am " + this.name);
      // Output: "Later, I am Alice". The arrow function inherited 'this' from the room!
    }, 1000);
  },
};