let cats = ["Blue", "Kitty"];
let dogs = ["Rusty", "Wyatt"];
let pets = cats.concat(dogs);
console.log(pets);

console.log(cats.includes("Blue"));

console.log(pets.indexOf("Rusty"));
console.log(pets.indexOf("John"));

pets.reverse();
console.log(pets);