const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log('CONNECTION OPEN!');
    })
    .catch(err => {
        console.log('ERROR!');
        console.log(e);
    });


// this is just a concept on the JavaScript side of the equation
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema); //this gives us a class
//const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });

Movie.insertMany([
    { title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' },
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
])
    .then(data => {
        console.log('IT WORKED!');
        console.log(data);
    })