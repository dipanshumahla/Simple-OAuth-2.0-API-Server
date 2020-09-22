var express = require('express');
var app = express();
var routes = require('./routes/index');
var parser = require('body-parser');

app.use(parser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use('/', routes);

var port = process.env.port || 3001;

app.listen(port, () => {
    console.log(`OAuth API Server is online at port ${port}`);
})