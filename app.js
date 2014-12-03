var express        = require('express'),
    routes         = require('./routes');
    http           = require('http');
    path           = require('path');
    simplimy       = require('./bin/simplimy');
    favicon        = require('serve-favicon');
    logger         = require('morgan');
    bodyParser     = require('body-parser');
    methodOverride = require('method-override');
    errorHandler   = require('errorhandler');

var app = express();
app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(favicon);
app.use(logger('dev'));
app.use(bodyParser);
app.use(methodOverride);
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

if ('development' == app.get('env')) {
  app.use(errorHandler);
}

app.get('/', routes.index);
app.get('/getting_started', routes.getting_started);
app.get('*', routes.index);
//app.get('/partials/:name', routes.partials);
//app.get('*', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
