const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number to check if it's prime: ", (number) => {
  const result = isPrime(number);

  console.log(`Result: ${number} is ${result ? "" : "not "}prime`);
  console.log(
    "The first 10 prime numbers are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29",
  );
  rl.close();
});

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  if (number == 2) {
    return true;
  }

  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
