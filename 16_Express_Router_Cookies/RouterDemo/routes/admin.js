const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send("Sorry, Not an ADMIN");
});

router.get('/topsecret', (req, res) => {
    res.send('This is TOP Secret');
});

router.get('/deleteeverything', (req, res) => {
    res.send('Ok deleted it all');
});



module.exports = router;