const { stdin, stdout, argv, stderr, exit } = process;

function stdOutHandler(message, code = 1) {
  stderr.write(message);
  exit(code);
}

const allowedFlags = ["-f", "-d"];

const enteredFlag = argv[2];

if (!allowedFlags.includes(enteredFlag)) {
  stdOutHandler("Please enter -f = file path or -d = dir path \n", 1);
}

switch (argv[2]) {
  case "-d":
    stdout.write(__dirname);
    break;
  case "-f":
    stdout.write(__filename);
    break;
  default:
    break;
}

exit(0);
