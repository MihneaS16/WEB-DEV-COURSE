const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

/// for...in iterates over the keys of an object

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

console.log("\n");
console.log(Object.keys(testScores));
console.log("\n");
console.log(Object.values(testScores));
console.log("\n");
console.log(Object.entries(testScores));