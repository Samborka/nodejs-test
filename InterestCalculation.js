const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter initial capital: ", (initialCapital) => {
  rl.question("Enter interest rate (in percentage): ", (interestRate) => {
    rl.question(
      "Enter investment time (in months): ",
      (investmentTimeMonths) => {
        const finalValue = calculateFinalInvestmentValue(
          parseFloat(initialCapital),
          parseFloat(interestRate),
          parseInt(investmentTimeMonths, 10),
        );
        console.log(`The final value of the investment is: ${finalValue}`);
        rl.close();
      },
    );
  });
});

function calculateFinalInvestmentValue(
  initialCapital,
  interestRate,
  investmentTimeMonths,
) {
  const monthlyInterestRate = interestRate / 100 / 12;
  const finalValue =
    initialCapital * (1 + monthlyInterestRate) ** investmentTimeMonths;
  return finalValue.toFixed(2);
}
