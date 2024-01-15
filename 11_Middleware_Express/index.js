const express = require('express');
const app = express();
const morgan = require('morgan');



app.use(morgan('tiny'));
app.use((req, res, next) => {
    console.log('1.This is my first middleware!');
    next(); // we have to call next in order to move to the next middleware, otherwise it stops at the first
    console.log('2.This is first middleware - after calling next'); // this will still be executed eventually
});
app.use((req, res, next) => {
    console.log('3.This is my second middleware!');
    next();
});

app.use((req, res, next) => { // this is recreating morgan (kind of)
    //req.method = 'GET'; // this is going to turn every request into a GET request
    req.requestTime = Date.now();
    console.log('4.', req.method, req.path);
    next();
});

///Password
const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    } else {
        res.send('Sorry, you need a password');
    }
};

// this middleware only runs for incoming requests with the path /dogs (for any verb)
app.use('/dogs', (req, res, next) => {
    console.log('This only prints for the path /dogs');
    next();
});

app.get('/', (req, res) => {
    console.log(`REQUEST TIME ${req.requestTime}`);
    res.send('Home Page');
});

app.get('/dogs', (req, res) => {
    console.log(`REQUEST TIME ${req.requestTime}`);
    res.send('Woof Woof');
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send('Secret');
});

app.use((req, res) => { // this will only run if we never sent back anything before
    res.status(404).send('NOT FOUND');
});

app.listen(3000, () => {
    console.log('App is running on port 3000');
});