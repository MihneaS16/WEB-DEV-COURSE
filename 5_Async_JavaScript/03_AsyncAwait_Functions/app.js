///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The ASYNC KEYWORD

// the async keyword is used to enable asynchronous, promise-based behavior for a function
// async magically, behind the scenes returns a promise for us, which is either resolved or rejected depending on what's going on inside of it

async function hello() {
    // return new Promise()
}

const sing = async () => {
    //throw new Error('AAAH!');
    return 'LA LA LA LA';
}

sing()
    .then(data => {
        console.log('PROMISE RESOLVED WITH', data);
    })
    .catch(err => {
        console.log(err);
    });


const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials';

    if (password === 'corgifeetarecute') return 'Welcome';

    throw 'Invalid Password';
}

login('mwk', 'corgifeetarecute')
    .then(msg => {
        console.log('Logged in');
        console.log(msg);
    })
    .catch(err => {
        console.log('Error');
        console.log(err);
    });



console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// THE AWAIT KEYWORD

// whenever we use the await keyword, it will pause the execution of our async function and wait for a promise to be resolved before continuing on
// await is usually paired together with async functions

function delayedColorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
        //reject(); // we do not have to reject this promise
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('purple', 1000))
//     .catch(() => {
//         console.log('DONE');
//     });

// ^^^ this looks better and is easier to read than the one above ^^^ 
async function rainbow() {
    await delayedColorChange('red', 1000); // it's going to wait for a promise to be resolved (things will be paused until the promise is resolved)
    console.log('This will only print after the first promise is resolved');
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('purple', 1000);
    return 'ALL DONE!'
}

// rainbow().then(() => console.log('END OF RAINBOW'));

async function printRainbow() {
    await rainbow(); // the await keyword can also be used with functions (function calls)
    console.log('END OF RAINBOW!');
}

printRainbow();


// another example

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(');
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    });
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequestPromise('/page1');
        let data2 = await fakeRequestPromise('/page2');
        console.log(data1);
        console.log(data2);
    } catch (e) {
        console.log('CAUGHT AN ERROR!!');
        console.log('ERROR IS:', e);
    }
}

makeTwoRequests();


console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// HANDLING ERRORS IN ASYNC FUNCTIONS

// using try...catch