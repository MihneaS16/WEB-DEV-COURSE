const password = prompt("Enter your password");

if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Valid password");
} else {
    console.log("Invalid password");
}

if (password.length < 6 || password.indexOf(" ") !== -1) {
    console.log("Invalid password");
}

if (!(password.length >= 6 && password.indexOf(" ") === -1)) {
    console.log("Invalid password");
}

