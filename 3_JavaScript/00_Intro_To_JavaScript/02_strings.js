//Strings

let firstName = "Mihnea";
let lastName = "Seitoaru";
console.log(firstName.length);
console.log(firstName + " " + lastName);

let result = 1 + "hi";
console.log(typeof result);
console.log(result);

let message = "I am king";
let upperMessage = message.toUpperCase();
console.log(upperMessage);

let userInput = "   There is too much space           ";
let userInputTrimmed = userInput.trim().toUpperCase();
console.log(userInputTrimmed);

let sentence = "haha that is so funny!";
let sentenceSliced1 = sentence.slice(5, 9);
let sentenceSliced2 = sentence.slice(-12);
console.log(sentenceSliced1);
console.log(sentenceSliced2);


let sentenceReplaced = sentence.replace("so", "not");
console.log(sentenceReplaced);

console.log("lol".repeat(5));


let product = "Artichoke";
let price = 2.25;
let qty = 5;
///Literals Note that I have to use ` ..... `
let str = `You bought ${qty} ${product.toUpperCase()} for the price of $${price * qty}`;
console.log(str);


//undefined => javaScript's way of saying "I do not know what it is"
//null => the concept of nothing, " There is nothing here"

//Math object

console.log(Math.PI);
console.log(Math.floor(23.999999));
console.log(Math.ceil(34.01));
//random number between 0 and 10
console.log(Math.floor(Math.random() * 10));
//random number between 1 and 10
console.log(Math.floor(Math.random() * 1) + 1);
