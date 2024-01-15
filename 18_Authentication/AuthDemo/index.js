const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');

const sessionOptions = { secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false };

mongoose.connect('mongodb://127.0.0.1:27017/authDemo')
    .then(() => {
        console.log('Mongo connection open');
    })
    .catch(err => {
        console.log('Mongo connection ERROR!');
        console.log(err);
    });

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(session(sessionOptions));

const requireLogin = (req, res, next) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    next();
}

app.get('/', (req, res) => {
    res.send('This is the home page');
});

app.get('/register', (req, res) => {
    res.render('register');
});

// app.post('/register', async (req, res) => {
//     const { password, username } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 12);
//     const user = new User({
//         username: username,
//         hashedPassword: hashedPassword
//     });
//     await user.save();
//     req.session.userId = user._id;
//     res.redirect('/');
// });

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const user = new User({ username, password });
    await user.save();
    req.session.userId = user._id;
    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.render('login');
});

// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username: username });
//     const valid = await bcrypt.compare(password, user.hashedPassword);
//     if (valid) {
//         req.session.userId = user._id; //we need to store a user's id in the session in order to keep them logged in
//         res.redirect('/secret');
//     } else {
//         res.redirect('/login');
//     }
// });

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.userId = foundUser._id; //we need to store a user's id in the session in order to keep them logged in
        res.redirect('/secret');
    } else {
        res.redirect('/login');
    }
});

app.post('/logout', (req, res) => {
    req.session.userId = null;
    //we can also use session destroy (especially if we have more information that we want to delete about the user that we are storing in a session)
    //req.session.destroy()
    res.redirect('/login');
});

app.get('/secret', requireLogin, (req, res) => {
    if (!req.session.userId) {
        res.redirect('/login');
    } else {
        res.render('secret');
    }
});

app.get('/topsecret', requireLogin, (req, res) => {
    res.send('Top Secret!!');
});

app.listen(3000, () => {
    console.log('Serving on port 3000');
});