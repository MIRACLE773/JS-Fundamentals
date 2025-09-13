// Get all arguments typed after "node 4-concat.js"
const args = process.argv.slice(2);

// Pick the first and second arguments from the list
const firstArg = args[0];
const secondArg = args[1];

// Print them in the format: "<first> is <second>"
console.log(`${firstArg} is ${secondArg}`);
