const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number to its factorial: ", (number) => {
  const result = calculateFactorial(number);

  console.log(`Result: ${number}! = ${result}`);
  rl.close();
});

function calculateFactorial(number) {
  if (number == 0) {
    return 1;
  } else {
    return parseFloat(number) * calculateFactorial(number - 1);
  }
}
