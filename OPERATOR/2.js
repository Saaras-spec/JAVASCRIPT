// Imagine a video game where a player's score is currently 0.
let playerScore = 0;

// Using the old || (The Flawed Backup)
let finalScoreOld = playerScore || 100;
console.log(finalScoreOld); // Output: 100 (Wait, it wiped out their 0 score!)

// Using the modern ?? (The Strict Backup)
let finalScoreNew = playerScore ?? 100;
console.log(finalScoreNew); // Output: 0 (It respects the 0 as real data!)
