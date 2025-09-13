// Get the first argument from the terminal
const arg = process.argv[2];

// Convert the argument to an integer
const number = parseInt(arg);

// Check if it is a valid number
if (isNaN(number)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${number}`);
}
