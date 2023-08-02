const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your first grade: ", (firstGrade) => {
  rl.question("Enter your second grade: ", (secondGrade) => {
    rl.question("Enter your third grade: ", (thirdGrade) => {
      const result = calculateAverageGrade(firstGrade, secondGrade, thirdGrade);

      console.log(`Result: The average grade is ${result}`);
      rl.close();
    });
  });
});

function calculateAverageGrade(firstGrade, secondGrade, thirdGrade) {
  const average =
    (parseFloat(firstGrade) +
      parseFloat(secondGrade) +
      parseFloat(thirdGrade)) /
    3;

  return average.toFixed(2);
}
