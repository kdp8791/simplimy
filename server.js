var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override'); 
var database = require('./config/database'); 

mongoose.connect(database.url);
app.use(express.static(__dirname + '/public')); 

require('./app/routes.js')(app);

app.listen(8080);
console.log("App listening on port 8080");