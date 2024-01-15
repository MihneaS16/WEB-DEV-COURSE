
let input = prompt("Hey, say something!")
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me") {
        break;
    }

}
console.log("OK YOU WIN");




