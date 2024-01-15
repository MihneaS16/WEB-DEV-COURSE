console.log("Hello from args file");

// this will return an array containing the command line arguments passed when Node.js process was launched
console.log(process.argv);

const args = process.argv.slice(2); // to ignore the path of node and the path of the project
for (let arg of args) {
    console.log(`Hello ${arg}`);
}