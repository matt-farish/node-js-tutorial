const path = require('path');

const express = require("express");

const router = express.Router();

router.get('/photos', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'photos.html'));
});

module.exports = router;