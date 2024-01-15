const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/relDemo')
    .then(() => {
        console.log('CONNECTION OPEN!');
    })
    .catch(err => {
        console.log('ERROR!');
        console.log(e);
    });


const userSchema = new mongoose.Schema({
    username: String,
    age: Number
});

const tweetSchema = new mongoose.Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweets = async () => {
    const user = new User({ username: 'mwk', age: 61 });
    const tweet1 = new Tweet({ text: 'cs2 is shit', likes: 1000 });
    tweet1.user = user;
    await user.save();
    await tweet1.save();
}

const findTweet = async () => {
    const tweet = await Tweet.find({}).populate('user', 'username');
    console.log(tweet);
}

//makeTweets();
findTweet();
