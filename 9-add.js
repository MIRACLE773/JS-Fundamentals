// Define the add function
function add(a, b) {
  return a + b;
}

// Get the two arguments from the terminal
const first = parseInt(process.argv[2]);
const second = parseInt(process.argv[3]);

// Print the result of adding them
console.log(add(first, second));
