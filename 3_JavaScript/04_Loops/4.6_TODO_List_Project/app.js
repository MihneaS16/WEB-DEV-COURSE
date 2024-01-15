
let input1 = prompt("What would you like to do?");
let list = [];

while (input1 !== "quit") {
    if (input1 === "new") {
        let input2 = prompt("Enter new todo");
        list.push(input2);
        console.log(`${input2} added to the list`);
    }
    else if (input1 === "list") {
        console.log("**********");
        for (let i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`);
        }
        console.log("**********");
    }
    else if (input1 === "delete") {
        let input2 = parseInt(prompt("Enter index of todo to delete"));
        while (Number.isNaN(input2)) {
            input2 = parseInt(prompt("unknown index"));
        }
        let deleted = list.splice(input2, 1);
        console.log(`Todo ${deleted} deleted`);

    }
    input1 = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");

