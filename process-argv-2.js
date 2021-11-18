const { stdin, stdout, argv, stderr, exit } = require("process");

const allowedFlags = ["-s", "-m"];

const enteredFlag = argv[2];

function stdOutHandler(message, code) {
  stderr.write(message);
  exit(code);
}

if (!allowedFlags.includes(enteredFlag)) {
  stdOutHandler("Enter flags: -s (sum) or -m (multiple) \n", 1);
}

stdout.write("Please enter 2 numbers \n");

stdin.on("data", (data) => {
  let numbers = data.toString().split(" ");

  const hasIncorrectValues = numbers.some((numStr) => isNaN(+numStr));

  if (numbers.length !== 2 || hasIncorrectValues) {
    stdOutHandler("You need two numbers with space between \n", 1);
  }

  const numbersForOperations = numbers.map((el) => +el);

  const [firstNum, secondNum] = numbersForOperations;

  switch (enteredFlag) {
    case "-s":
      stdOutHandler(
        `${firstNum} + ${secondNum} = ${firstNum + secondNum} \n`,
        0
      );
      break;
    case "-m":
      stdOutHandler(
        `${firstNum} * ${secondNum} = ${firstNum * secondNum} \n`,
        0
      );
      break;
    default:
      break;
  }
});

process.on("exit", (code) => {
  console.log(code);
});
