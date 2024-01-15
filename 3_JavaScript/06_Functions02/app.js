// function scope
let totalEggs = 0;

function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs);
}

collectEggs();
console.log(totalEggs, "\n");


///block scope
let radius = 8;
if (radius > 0) {
    const PI = 3.14;
    let msg = 'HI!';
    console.log(PI, "\n");
}

// console.log(PI); -> error, it is only declared in the 'if' scope
// if we used 'var' instead of 'let' or 'const', we would be able to access the variables outside the scope


// lexical scope
// a nested or inner function has access to the same stuff as parent function or any levels up

function bankRobbery() {
    let heroes = ['Spiderman', 'Wolverine', 'Black Panther'];
    function callForHelp() {
        let msg = 'abc'; // this cannot be accessed from bankRobbery()
        function inner() {

            for (let hero of heroes) {
                console.log(`Please help us,  ${hero.toUpperCase()}`);
            }
        }
        inner();
    }
    // an inner function nested inside of some parent function has access to the scope in the scope of that outer function
    callForHelp();
}

bankRobbery();


// function expressions
// functions are basically values in javascript (we can store them, pass them around, return them, etc.)

const add = function (x, y) {
    return x + y;
}


//higher order functions

function callTenTimes(func) {
    for (let i = 0; i < 10; i++) {
        func();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll);
}

callTenTimes(rollDie);


// returning functions

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("Congrats! I am a good function");
        }
    } else {
        return function () {
            console.log("I am a bad function");
        }
    }
}

const mystery = makeMysteryFunc();
mystery();

// useful use

// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }
// function isBetween2(num) {
//     return num >= 1 && num <= 10;
// }

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const between = makeBetweenFunc(1, 10);
console.log(between(11));


//DEFINING METHODS
// methods are functions added as properties to objects
const myMath = {
    PI: 3.14,
    square: function (num) {
        return num * num;
    },
    // we can use a shortcut and remove the 'function' and ':'
    cube(num) {
        return num ** 3;
    }
}

console.log(myMath.square(4));
console.log(myMath.cube(2));


//console.log(Math["pow"](2, 4));


// THE KEYWORD 'THIS'

const cat = {
    name: 'BLue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says MEOW`);
    }
}

const meow2 = cat.meow;

// the window object
meow2();

cat.meow();