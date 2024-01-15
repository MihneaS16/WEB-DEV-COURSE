//Prototypes
// The mechanisms by which JavaScript objects inherit features from one another.
// Arrays are objects in javascript. The Array prototype is referenced bu the property __proto__. A prototype is a template object for (in this case) arrays

// The basic idea of prototypes in JavaScript: We have this one object that is the prototype for other types of objects

console.log(Array.prototype);

// We could define our own type of Object and set its prototype to the (let's say) array prototype and actually have access to those array methods in my object
// Ptototypes are like a template object


String.prototype.grumpus = () => alert("GO AWAY");
const cat = "Blue";
cat.grumpus();

// In the example above cat is just a refrence to the prototype object, which is String.prototype


String.prototype.yell = function () {
    return `${this.toUpperCase} !!!!!!!!!!`;
};
console.log("hello".yell());


console.log([3, 4, 5].pop());
Array.prototype.pop = function () {
    return 'Overwrite the existing pop successful'
};
console.log([3, 4, 5].pop());



