var express        = require('express'),
    app            = express(),
    routes         = require('./app/routes')(app),
    http           = require('http'),
    path           = require('path'),
    favicon        = require('serve-favicon'),
    logger         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler   = require('errorhandler'),
    lessMiddleware = require('less-middleware');

app.set('port', process.env.PORT || 3000);

//app.use(favicon);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride);
app.use(lessMiddleware(__dirname + '/public/less'));
app.use(express.static(__dirname + '/public'));

if ('development' == app.get('env')) {
  app.use(errorHandler);
}

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
