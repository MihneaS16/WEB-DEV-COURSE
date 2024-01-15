const btn = document.querySelector('#v2');
console.log(btn);


console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The Onclick Property

btn.onclick = function () {
    console.log("You clicked me!");
}


function scream() {
    console.log('AAAAHHHH');
    console.log('STOP TOUCHING ME');
}


// here we are not executing the function scream (like scream()), we are setting a property on a button object
btn.onmouseenter = scream;


// document.querySelector('h1').onclick = alert('you clicked the h1'); // this will execute the alert right away, without having to actually click on h1
document.querySelector('h1').onclick = function () {
    alert('you clicked the h1');
}



console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// addEventListener
// the swiss army knife of events
// we can pass in any event we want to listen for (onclick, mouseenter, etc.)

//Events MDN : https://developer.mozilla.org/en-US/docs/Web/Events

const btn3 = document.querySelector('#v3');

// btn3.addEventListener('click', function () {
//     alert('Clicked button 3!');
// });

btn3.addEventListener('dblclick', function () {
    alert('Double clicked button 3!');
});


function twist() {
    console.log('TWIST!');
}

function shout() {
    console.log('SHOUT!');
}

const tasButton = document.querySelector('#tas');

// we cannot have both if we use the .onclick
tasButton.onclick = twist;
tasButton.onclick = shout; // this will overwrite the twist

// if we use addEventListener, we can have both
tasButton.addEventListener('click', twist, { once: true }); // the once: true will make it so that it only calls twist the first time it's clicked
tasButton.addEventListener('click', shout);



console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Events & The keyword 'this'

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('.container  button');
for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('.container  h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}



console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Keyboard Events & Event Objects

// evt or e is the event object and it offers important properties information about the event

document.querySelector('.keyboard_events button').addEventListener('click', function (e) {
    console.log(e);
});

const input = document.querySelector('.keyboard_events input');

input.addEventListener('keydown', function (e) {
    console.log('KEY DOWN');
    console.log(e);
    console.log(e.key);
    console.log(e.code); // the code corresponds to an actual location on the keyboard (for example we can use it when a user changes its country keyboard)
});
input.addEventListener('keyup', function () {
    console.log('KEY UP');
});

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log('UP!');
            break;
        case 'ArrowDown':
            console.log('DOWN!');
            break;
        case 'ArrowLeft':
            console.log('LEFT!');
            break;
        case 'ArrowRight':
            console.log('RIGHT!');
            break;
        default:

    }
});



console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Form Events & Prevent Default

const form = document.querySelector('#shelterForm');
const input2 = document.querySelector('#catName');
const list = document.querySelector('#cats');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevents the default behaviour triggered by a given event (in this case actually submitting the form)
    console.log(input2.value);
    console.log("SUBMITTED!");
    const catName = input2.value;
    const newLi = document.createElement('li');
    newLi.innerText = catName;
    console.log(newLi);
    list.append(newLi);
    input2.value = '';
    // form.reset();
});

//TODO - add the original (more complicated) version as an example to this
const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}



console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Input and change events

const input3 = document.querySelector('.input_change input');
const h2Input = document.querySelector('.input_change h2');

input3.addEventListener('change', function (e) {
    console.log('CHANGE EVENT');
});

input3.addEventListener('input', function (e) {
    h2Input.innerText = input3.value;
    console.log('INPUT EVENT');
});



console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Event Bubbling

const button = document.querySelector('#changeColor');
const container = document.querySelector('.bubbling');

button.addEventListener('click', function (e) {
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation(); // this is used to prevent the click event from bubbling up and also toggling the hide class in the container
})
container.addEventListener('click', function (e) {
    container.classList.toggle('hide');
})



console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Event Delegation
// used to target specific elements that we want to modify/remove

tweetsContainer.addEventListener('click', function (e) {
    if (e.target.nodeName === 'LI') { // for some reason, it only works with uppercase 'LI'
        e.target.remove();
    }
});