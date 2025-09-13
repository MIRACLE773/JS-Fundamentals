// Define the recursive factorial function
function factorial(n) {
  if (isNaN(n) || n === 0) {
    return 1; // Base case: factorial of 0 or NaN is 1
  }
  return n * factorial(n - 1); // Recursive call
}

// Get the number from the terminal
const num = parseInt(process.argv[2]);

// Print the factorial result
console.log(factorial(num));
