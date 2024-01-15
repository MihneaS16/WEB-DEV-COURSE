let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}


const secret = "BabyHippo";
let guess = prompt("Enter the secret code...");
while (guess !== secret) {
    guess = prompt("Enter the secret code...");
}