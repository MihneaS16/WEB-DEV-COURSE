const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/relDemo')
    .then(() => {
        console.log('CONNECTION OPEN!');
    })
    .catch(err => {
        console.log('ERROR!');
        console.log(e);
    });

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: { _id: false },
            street: String,
            city: String,
            state: String,
            country: {
                type: String,
                required: true
            }
        }
    ]
});

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    });
    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    });
    const result = await u.save();
    console.log(result);
}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            street: '99 3rd St.',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        }
    );
    const result = await user.save();
    console.log(result);
}

addAddress("6568d494f42158ac4b36ec6e");
//makeUser();
