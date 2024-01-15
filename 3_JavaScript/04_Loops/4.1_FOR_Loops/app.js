const animals = ["lions", "tigers", "bears"];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

console.log("\n");

///nested loops

for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`);
    for (let j = 1; j < 4; j++) {
        console.log(`  j is: ${j}`);
    }
}

const seatingChart = [
    ["Kristen", "Erik", "Namita"],
    ["Geofrey", "Juanita", "Antonio", "Kevin"],
    ["Yuma", "Sakura", "Jack", "Erika"]
]

console.log("\n");

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`);
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}