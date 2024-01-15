function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

singSong();


function greet(firstName, lastName) {
    console.log(`Hi, ${firstName} ${lastName[0]}.`);
}

greet("Mihnea", "Seitoaru");


function repeat(message, nrTimes) {
    let result = ""
    for (let i = 0; i < nrTimes; i++) {
        result += message;
    }
    console.log(result);
}

repeat("Miau", 5);


function add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return "Not a number";
    }

    return x + y;
}

let total = add(1, 3);
console.log(total);