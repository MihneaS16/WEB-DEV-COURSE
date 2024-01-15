///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The Call Stack - basically how the function calls are managed by the program
// tool that helps javascript keep its place in our code 

// see the explanation of how it works on the slides
// also use debugger in  inspect -> sources -> add breakpoint -> debug

const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (square(a) + square(b) === square(c));

console.log("BEFORE");

console.log(isRightTriangle(3, 4, 5));

console.log("AFTER");



console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// WebAPIs & Single Threaded

// javascript is single-threaded - it runs a single line of code at a time

console.log('Sending request to server');
setTimeout(() => {
    console.log('Here is your data from the server...');
}, 3000); // this runs ... kind of

// callback - passing a function in that is not executed right away, but is instead executed later

console.log('I am at the end of the file!'); // this runs before the 3 sec from the previous function have passed

// WebAPIs are methods that we can call from javascript that are handed off to the browser to take care of
// more on the slides



console.log('\n');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Callback hell

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
// }, 1000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
// }, 2000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'yellow';
// }, 3000);

// instead of going up 1 second at each call, we can use nesting to have an easier approach 
setTimeout(() => {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
        document.body.style.backgroundColor = 'orange';
        setTimeout(() => {
            document.body.style.backgroundColor = 'yellow';
            setTimeout(() => {
                document.body.style.backgroundColor = 'green';
                setTimeout(() => {
                    document.body.style.backgroundColor = 'blue';
                    setTimeout(() => {
                        document.body.style.backgroundColor = 'purple';
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


const delayedColorChange = (newColor, delay, doNext) => { // doNext is a callback (we will execute it after we change the color)
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay);
};

delayedColorChange('olive', 7000, () => {
    delayedColorChange('teal', 1000, () => {
        delayedColorChange('hotpink', 1000, () => {
            console.log("END");
        });
    });
});


// this is why callbacks can be so frustrating to work with -> callback hell
searchMoviesAPI('amadeus', () => {
    saveToMyDB(movies, () => {
        // if it works, run this:
    }, () => {
        // if it doesn't work, run this:
    });
}, () => {
    // if API is down, or request failed
});
