var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override'); 

mongoose.connect('mongodb://keyur:wahjudi@ds053320.mongolab.com:53320/simplimy');
app.listen(8080);
console.log("App listening on port 8080");

// Load Home Page
app.get('/', function(req, res)
{
	res.sendFile('./public/index.html');
});