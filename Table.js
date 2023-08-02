const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number to find its table: ", (number) => {
  const result = calculateTable(number);

  console.log(`Result:`);
  console.log(result);
  rl.close();
});

function calculateTable(number) {
  let result = "";

  for (let i = 1; i <= 10; i++) {
    result += `${number} x ${i} = ${parseFloat(number) * i}\n`;
  }

  return result;
}
