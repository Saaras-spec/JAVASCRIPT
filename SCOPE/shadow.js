let sarah = "The CEO"; // Global Scope

{
  // Block Scope (Your desk)
  let sarah = "The Coworker";

  // JavaScript checks the local room first, finds a match, and stops!
  console.log(sarah); // Output: "The Coworker"
}

// Now we step outside the block (back to the wider company)
console.log(sarah); // Output: "The CEO" (The CEO is safe and unchanged!)
