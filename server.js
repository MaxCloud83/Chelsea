// file: server.js

var express = require('express')
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')

var app = express()

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))

let favicon = require('serve-favicon');
app.use(favicon(`${__dirname}/favicon.ico`));

app.get('/', function (req, res) {
    res.send('hello world');
});
app.listen(1337);
console.log('Server built with express running at http://127.0.0.1:1337/');


