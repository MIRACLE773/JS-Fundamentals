// 3-value_argument.js

const args = process.argv.slice(2); // get user arguments

// Check if the first argument exists
if (args[0] === undefined) {
    console.log("No argument");
} else {
    console.log(args[0]);
}
