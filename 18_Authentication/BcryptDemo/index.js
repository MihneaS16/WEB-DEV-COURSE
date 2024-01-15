const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    console.log(salt);
    console.log(hash);
}

//we can also just use this, instead of generating the salt separately
const hashPassword2 = async (password) => {
    const hash = await bcrypt.hash(password, 12); // here we just pass the number of rounds instead of the salt
    console.log(hash);
}

const login = async (password, hashedPassword) => {
    const result = await bcrypt.compare(password, hashedPassword);
    if (result) {
        console.log('Logged you in successfully');
    } else {
        console.log('Try again');
    }
}

//hashPassword('monkey');
//hashPassword2('monkey');
login('monkey', '$2b$12$z4bepe6KzM0.nY6nr.5qV.pYgRCtayIKlrS1IgdjotxZNnoKarJSa');