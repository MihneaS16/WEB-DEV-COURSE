///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The forEach method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// for (let el of numbers) {
//     console.log(el);
// }

numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el);
    }
});


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

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
});

console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The map method
// Similar to forEach, but it creates a new array with the results of calling a cllback on every element in the array

const doubles = numbers.map(function (num) {
    return num * 2;
});

console.log(doubles);

const movieTitles = movies.map(function (movie) {
    return movie.title.toUpperCase();
});

console.log(movieTitles);

console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Arrow Functions - no internet explorer support
// They are a more compact alternative to the regular functions

// const add = function (x, y) {
//     return x + y;
// }

const add = (x, y) => {
    return x + y;
}

console.log(add(1, 2));


// when there is a single argument like in the following case, the '()' are optional
const square = x => {
    return x * x;
}

console.log(square(9));

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const rollDie2 = () => (
    Math.floor(Math.random() * 6) + 1
);

const rollDie3 = () => Math.floor(Math.random() * 6) + 1;

console.log(rollDie());
console.log(rollDie2());
console.log(rollDie3());


console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Arrow functions wrapup

// movies.map(function (movie) {
//     console.log(`${movie.title} - ${movie.score / 10}/10`);
// });

const newMovies = movies.map(movie =>
    `${movie.title} - ${movie.score / 10}/10`
);

console.log(newMovies);


console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FILTER

const arr = numbers.filter(n => {
    return n < 5
});

console.log(arr);

const goodMovies = movies.filter(m => m.score > 90);
const goodTitles = goodMovies.map(m => m.title);
console.log(goodTitles);


console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SOME AND EVERY

const exams = [80, 98, 50, 45, 32, 77, 90, 100, 43, 25, 69];

console.log(exams.every(score => score >= 50)); // it checks if all scores are '>=' 50

console.log(exams.some(score => score >= 50)); // it checks if at least one score is '>=' 50


console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// REDUCE
const prices = [9.99, 1.50, 19.99, 49.99, 30.59];

let total = prices.reduce((accumulator, element) => accumulator + element);
let expenses = prices.reduce((accumulator, element) => accumulator + element, 100);

let minPrice = prices.reduce((minimum, element) => minimum < element ? minimum : element);


console.log(total);
console.log(expenses);
console.log(minPrice);


console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Arrow Functions & 'this'

// inside of an arrow function, the keyword 'this' will just refer to the scope it was created in
// when we use a traditional function, the keyword 'this' has nothing to do with the scope where the function is created, 
///it has to do with how the function is executed

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this.fullName());
        }, 0);
    }
}
person.shoutName();


console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// setTimeout and setInterval

/// after 3000 miliseconds, it will execute the function
console.log("HELLOOO!!");
setTimeout(() => {
    console.log("Are you still there?");
}, 1000);


/// it will print a random number every 2000 miliseconds, untill the program stops
setInterval(() => {
    console.log(Math.floor(Math.random() * 10) + 1);
}, 10000);

