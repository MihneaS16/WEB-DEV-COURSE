const express = require('express');
const path = require('path');
const app = express();
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs'); // this is so that we can use EJS
app.set('views', path.join(__dirname, '/views')); // this is taking our current directory name and joining the full path to get there with /views


app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/rand', (req, res) => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs', { randomNum }); // if we pass the number like this the key will be the same as the value, so randomNum: randomNum
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    //console.log(data);
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit })
    }

});

app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Rocky', 'Monty', 'Stephanie', 'Winston'];
    res.render('cats.ejs', { cats });
});

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
});