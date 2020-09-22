var express = require('express');
var path = require('path');
var router = express.Router();

var authorization = require('./auth');

router.get('/', (req, res) => {
    res.send('Authorization server');
});

router.use('/auth', authorization);

module.exports = router;