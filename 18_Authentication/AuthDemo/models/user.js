const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { type: String, required: [true, 'Username cannot be blank'] },
    hashedPassword: { type: String, required: [true, 'Password cannot be blank'] }
});

// statics is where we can define multiple methods that will be added to the user class itself and not to particular instances of user
userSchema.statics.findAndValidate = async function (username, password) {
    const foundUser = await this.findOne({ username }); // this refers to the particular model (schema) which will be user
    const isValid = await bcrypt.compare(password, foundUser.hashedPassword);
    return isValid ? foundUser : false;
}

userSchema.pre('save', async function (next) {
    // here it will tell us if the password has been modified on this particular user model so that we know if we have to rehash the password
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12); // here this refers to the particular instance of the user
    next(); // here next means save
});

module.exports = mongoose.model('User', userSchema);