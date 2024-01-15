
let maxNumber = parseInt(prompt("Welcome! Enter your max number:"));
while (!maxNumber) {
    maxNumber = parseInt(prompt("Enter a valid number!"));
}
const guessNumber = Math.floor(Math.random() * maxNumber) + 1;
let nrGuesses = 1;

input = prompt("Enter your first guess:");
while (parseInt(input) !== guessNumber) {
    if (input === "q") break;
    input = parseInt(input);
    while (!input) {
        input = parseInt(prompt("Enter a valid number!"));
    }
    if (input < guessNumber) {
        input = prompt("Too Low. Guess Again:");
    }
    else if (input > guessNumber) {
        input = prompt("Too High. Guess Again:");
    }
    nrGuesses++;
}

if (input === "q") {
    console.log("OK, Quitting");
}
else {
    console.log(`It took you ${nrGuesses} guesses`);
}




