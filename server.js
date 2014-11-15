var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var database = require('./config/database');
var vis = require('vis');

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

require('./app/routes.js')(app);

var myo = require('./app/simplimy.js');

app.listen(8080);
console.log("App listening on port 8080");
