const { stdin, stdout, stderr } = process;

stdout.write("Please enter your name \n");

stdin.on("data", (data) => {
  stdout.write(`Welcome ${data}`);
  process.exit();
});

process.on("exit", () => stdout.write("Goodbye \n"));
