const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('All Dogs');
});

router.post('/', (req, res) => {
    res.send('Add a new dog');
});

router.get('/:id', (req, res) => {
    res.send('Viewing one dog');
});

router.get('/:id/edit', (req, res) => {
    res.send('Editing a dog');
});

module.exports = router;