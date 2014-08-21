/*jslint node: true */
'use strict';

// framework
var express = require('express');

// http://nodejs.org/api/http.html#http_http
var http = require('http');

// middleware: request parser (https://github.com/senchalabs/connect#middleware)
var bodyparser = require('body-parser');

// ---------------------------------

var app = express(); // initialize express

app.use(express.static(__dirname + (process.env.STATIC_DIR || '/build')));

app.use(bodyparser.json());
require('./routes/routes')(app);

var server = http.createServer(app);
  
app.set('port', process.env.PORT || 3000 );

server.listen(app.get('port'), function() {
  console.log('Server running on ' + app.get('port'));
});
