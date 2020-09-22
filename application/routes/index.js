var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/login');
});

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/authorized', (req, res) => {
    res.send("You are authorized via OAuth 2.0 API");
});


router.post('/error', (req, res) => {
    res.send("Didn't got the access!");
})

module.exports = router;