var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/login');
});

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/authorized', (req, res) => {
    console.log(req.body)
    res.send(req.body);
});

module.exports = router;