let age = 20;

// The long, old way:
let message;
if (age >= 18) {
  message = "Welcome in!";
} else {
  message = "Too young!";
}

// The fast, modern Ternary way:
let fastMessage = age >= 18 ? "Welcome in!" : "Too young!";
