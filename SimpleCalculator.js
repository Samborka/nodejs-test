const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let firstNumber = 0;
let secondNumber = 0;

rl.question("Enter first number: ", (number) => {
  firstNumber = parseFloat(number);

  rl.question("Enter mathematical operator (+, -, *, /): ", (operator) => {
    rl.question("Enter second number: ", (number) => {
      secondNumber = parseFloat(number);

      const result = calculate(firstNumber, secondNumber, operator);

      console.log(
        `Result: ${firstNumber} ${operator} ${secondNumber} = ${result}`,
      );
      rl.close();
    });
  });
});

function calculate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return firstNumber / secondNumber;
    default:
      return "Invalid operator";
  }
}
