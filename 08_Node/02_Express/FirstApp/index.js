// npm install express
const express = require("express");
const app = express();
//console.dir(app);

// any time we get an incoming request this code runs

// app.use((req, res) => { // request and response are objects made by express and passed in to this callback (express turns the http request into an object)
//     console.log('WE GOT A NEW REQUEST');
//     //console.dir(req);
//     //res.send('HELLO, WE GOT YOUR REQUEST, THIS IS A RESPONSE');
//     //res.send({ color: 'red' });
//     res.send('<h1>This is my webpage</h1>');
// });


app.get('/', (req, res) => { // this is the home(root) route
    res.send('This is the homepage');
})

app.get('/r/:subreddit', (req, res) => { // anything that matches this pattern
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit with the ${postId} id`);
});

app.get('/cats', (req, res) => {
    res.send('MEOW!!');
});

app.get('/dogs', (req, res) => {
    res.send('WOOF!!');
});

app.post('/cats', (req, res) => { // post methods are used for sending data to the server
    res.send('POST REQUEST TO /cats!! THIS IS DIFFERENT THAN A GET REQUEST');
});

app.get('/search', (req, res) => {
    console.log(req.query); // this will print the query object
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED');
    }
    else {
        res.send(`<h1>Search results for: ${q}</h1>`);
    }
});

app.get('*', (req, res) => { // this is used for universal get (*) and it must be placed at the end so that the other app.get() are not ignored
    res.send(`I don't know that path`);
});



// 3000 is the port
// this is going to print out when the server has started
app.listen(3000, () => {
    console.log('Listening on port 3000!');
}); 