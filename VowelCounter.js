const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a word to count how many vowels it has: ", (string) => {
  const result = countVowels(string);

  console.log(`Result: ${string} has ${result} vowels`);
  rl.close();
});

function countVowels(string) {
  const vowels = string.match(/[aeiouAEIOU]/g);

  return vowels.length;
}
