const flagIndex = process.argv.indexOf("-m");

if (flagIndex !== -1) {
  const message = process.argv[flagIndex + 1];
  console.log(message);
}

// Function for get process argv value

function getValue(flag) {
  const flagIndex = process.argv.indexOf(flag);
  return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
}
const message = getValue("-m");
console.log(message);
