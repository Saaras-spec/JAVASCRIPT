var myNumber = 10;

{
  let myNumber = 20; // This is perfectly fine. The 'let' is safely trapped inside the block.
  console.log(myNumber); // Output: 20
}

let myNumber = 10;

{
  var myNumber = 20; // 🚨 SyntaxError: Identifier 'myNumber' has already been declared
  // The 'var' leaks out of the block, so JavaScript thinks you are
  // trying to re-declare the outer 'let', which is illegal!
}