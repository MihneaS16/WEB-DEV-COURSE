const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('CONNECTION OPEN!');
    })
    .catch(err => {
        console.log('ERROR!');
        console.log(e);
    });

const personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});

personSchema.virtual('fullName')
    .get(function () {
        return `${this.firstName} ${this.lastName}`;
    })
    .set(function (newName) {
        this.firstName = newName.substr(0, newName.indexOf(' '));
        this.lastName = newName.substr(newName.indexOf(' ') + 1);
    });

personSchema.pre('save', async function () {
    console.log('ABOUT TO SAVE');
});

personSchema.post('save', async function () {
    console.log('JUST SAVED');
});


const Person = mongoose.model('Person', personSchema);

const tammy = new Person({ firstName: 'Tammy', lastName: 'Abraham' });
