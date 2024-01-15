const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
    console.log(req.cookies);
    const { name = 'no-name' } = req.cookies;
    res.send(`Hey there, ${name}!`);
});

app.get('/setname', (req, res) => {
    res.cookie('name', 'stevie wonder');
    res.cookie('animal', 'dog');
    res.send('ok, sent you a cookie!');
});

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'apple', { signed: true });
    res.send('ok, signed your cookie');
});

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies);
});

app.listen(3000, () => {
    console.log('Serving on port 3000');
});