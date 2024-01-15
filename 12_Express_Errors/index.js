const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');

app.use(morgan('tiny'));
app.use((req, res, next) => {
    console.log('1.This is my first middleware!');
    next();
    console.log('2.This is first middleware - after calling next');
});
app.use((req, res, next) => {
    console.log('3.This is my second middleware!');
    next();
});

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log('4.', req.method, req.path);
    next();
});


const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    } else {
        // res.send('Sorry, you need a password');
        throw new AppError("Password required", 401);
    }
};


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

app.get('/error', (req, res) => {
    chicken.fly(); //this variable doesn't exist
});

app.get('/admin', (req, res) => {
    throw new AppError('You are not an admin', 403);
});

// app.use((err, req, res, next) => {
//     console.log("********ERROR********");
//     console.log(err);
//     next(err);
// });

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something Went Wrong' } = err;
    res.status(status).send(message);
    next(err);
});


app.use((req, res) => {
    res.status(404).send('NOT FOUND');
});

app.listen(3000, () => {
    console.log('App is running on port 3000');
});