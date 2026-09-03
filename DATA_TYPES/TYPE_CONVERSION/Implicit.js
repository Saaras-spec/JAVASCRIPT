let result = "5" + 2;
console.log(result);
// Output: "52" (Wait, what?!)

// What JavaScript secretly did:
// "5" + String(2) -> "5" + "2" -> "52"

let resul = "10" - 2;
console.log(resul); 
// Output: 8 (Normal math!)

// What JavaScript secretly did:
// Number("10") - 2 -> 10 - 2 -> 8