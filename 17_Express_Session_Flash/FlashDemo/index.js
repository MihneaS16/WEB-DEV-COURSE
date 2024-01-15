const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const sessionOptions = { secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false }
const flash = require('connect-flash');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
    res.locals.messages = req.flash('success');
    next();
});

app.get('/flash', (req, res) => {
    // Set a flash message by passing the key, followed by the value, to req.flash().
    req.flash('success', 'Flash is back!');
    res.redirect('/');
});

app.get('/', (req, res) => {
    // Get an array of flash messages by passing the key to req.flash()
    res.render('index', { messages: req.flash('success') }); // here we retrieve everything that is under the key 'success'
});

app.listen(3000, () => {
    console.log('Serving on port 3000');
});