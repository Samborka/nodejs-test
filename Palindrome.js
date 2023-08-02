const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a word to verify if it is a palindrome: ", (string) => {
  const result = isPalindrome(string);

  console.log(
    `Result: ${string} is ${result ? "a palindrome" : "not a palindrome"}`,
  );
  rl.close();
});

function isPalindrome(string) {
  const reversedString = revertString(string);
  const stringWithoutSpace = string.replace(/\s/g, "");

  return stringWithoutSpace.toLowerCase() === reversedString.toLowerCase();
}

function revertString(string) {
  const stringWithoutSpace = string.replace(/\s/g, "");

  return stringWithoutSpace.split("").reverse().join("");
}
