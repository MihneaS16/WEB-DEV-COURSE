console.log("It's working!");

///IF
let random = Math.random();
console.log("Before conditional");
if (random <= 0.5) {
    console.log("Your number is less than 0.5!!");
    console.log(random);
}

if (random > 0.5) {
    console.log("Your number is greater than 0.5!!");
    console.log(random);
}
console.log("After conditional");


//ELSE IF and ELSE 
const dayOfWeek = prompt("Enter a day").toUpperCase();

if (dayOfWeek === "MONDAY") {
    console.log("UGH I hate Mondays!!");
} else if (dayOfWeek === "SATURDAY") {
    console.log("YAY I love Saturdays!!");
} else {
    console.log("Just Another Day.");
}


// Password must be 6+ characters
// Password cannot include space

const password = prompt("Please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Valid password");
    } else {
        console.log("Password cannot contain spaces!");
    }
} else {
    console.log("Password too short! Must be at least 6 characters");
}