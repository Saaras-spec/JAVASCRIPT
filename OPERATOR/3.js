let user = {
  name: "Alice",
  // Notice there is no "address" object here!
};

// The old way (Crashing the program):
// console.log(user.address.zipCode);
// 🚨 TypeError: Cannot read properties of undefined (reading 'zipCode')

// The polite Optional Chaining way:
console.log(user.address?.zipCode);
// Output: undefined (No crash! It saw 'address' was missing and stopped.)
