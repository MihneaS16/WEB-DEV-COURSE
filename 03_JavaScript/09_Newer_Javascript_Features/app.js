///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Default Params

function rollDie(numSides = 6) {
    // the old way
    // if (numSides === undefined) {
    //     numSides = 6;
    // }

    return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie());
console.log(rollDie(20));

function greet(person, msg = "Hey there", punc = "!") {
    return `${msg}, ${person}${punc}`;
}

console.log(greet("MIHNEA", "HI", "."));


console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Spread

const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];

console.log(Math.max(13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456));
console.log(Math.max(nums));
// here ... is used to spread this array into numbers
console.log(Math.max(...nums));


console.log(nums);
console.log(...nums);
console.log(..."hello", "it's me");


console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Spread with Array Literals

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

// here we use ... to COPY the elements from both cats and dogs arrays
const allPets = [...cats, ...dogs, "Speedy"];
console.log(allPets);

const hello = [..."hello"];
console.log(hello);


console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Spread with Object Literals

const feline = {
    legs: 4,
    family: "Felidae"
};

const canine = {
    isFurry: true,
    family: "Caninae"
};

const copyFeline = { ...feline, color: "black" };
console.log(copyFeline);

// the order matters if we have a conflict (in this case, since both objects have the property 'family', the new object will take the value
// from the one which is passed last - it overwrites the first assigned value)

const catDog = { ...feline, ...canine };
console.log(catDog);

// in the following case, the keys will be the actual inices of the array and the values will be the actual value from that index in the array
const keyValuePairs = { ...[2, 4, 6, 8] };
console.log(keyValuePairs);



console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// REST

// the arguments object
// arguments is not an array
function sum() {
    console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++)
        total += arguments[i];
    console.log(total);

    // this does not work
    //console.log(arguments.reduce((total, el) => total + el));
}

function sum2(...nums) {
    console.log(nums);
    console.log(nums.reduce((total, el) => total + el));
}

sum(1, 2, 3);
sum2(1, 2, 3);


function raceResults(gold, silver, bronze, ...everyoneElse) {
    console.log(`Gold medal goes to: ${gold}`);
    console.log(`Silver medal goes to: ${silver}`);
    console.log(`Bronze medal goes to: ${bronze}`);
    console.log(`Thanks ${everyoneElse} for participating`);
}

raceResults("Mihnea", "Colt Steele", "Adrian", "Andreea", "Mario");



console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Destructuring Arrays

const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];
const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;
console.log(gold, silver, bronze);
console.log(everyoneElse);


console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Destructuring Object - more common

const user = {
    email: "harvey@gmail.com",
    password: "sCoTt1948sMiTh",
    firstName: "Harvey",
    lastName: "Milk",
    born: 1930,
    died: 1978,
    bio: "Harvey Bernard Milk was an American politician",
    city: "San Francisco",
    state: "California"
}

const user2 = {
    email: "stacey@gmail.com",
    firstName: "Stacey",
    lastName: "Smith",
    born: 1987
}

// const firstName = user["firstName"];
// const lastName = user["lastName"];
// const email = user["email"];

const { email, firstName, lastName } = user;

console.log(email);
console.log(firstName, lastName);

// we can rename the variables created
const { born: birthYear } = user;
console.log(birthYear);

// set default for the 'died' variable, which does not actually exist in the user2 object
const { firstName: firstName2, lastName: lastName2, died = "N/A" } = user2;
console.log(died);



console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Destructuring params

// function fullName(user) {
//     const {firstName, lastName} = user;
//     return `${user.firstName} ${user.lastName}`;
// }

// actual example
function fullName({ firstName, lastName }) {
    return `${user.firstName} ${user.lastName}`;
}

console.log(fullName(user));

const movies = [
    {
        title: "Amadeus",
        score: 99
    },
    {
        title: "Stand by me",
        score: 85
    },
    {
        title: "Parasite",
        score: 95
    },
    {
        title: "Alien",
        score: 90
    }
];

const goodMovies = movies.filter(({ score }) => score >= 90);
console.log(goodMovies);

console.log(movies.map(({ title, score }) => {
    return `${title} is rated ${score}`
}));