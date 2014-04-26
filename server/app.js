
/**
 * Module dependencies.
 */


var config = require('./config');
var express = require('express');
var http = require('http');
var path = require('path');
var authenticate = require('./modules/authenticate');
var db = require('./modules/database');
var fs = require('fs');
var app = express();


// app.use(function(req, res, next) {
//     var reqType = req.headers["x-forwarded-proto"];
//     reqType == 'https' ? next() : res.redirect("https://" + req.headers.host + req.url);
// });



// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('blahblahblah'));
app.use(express.session());
app.use(app.router);
app.use(express.static('./client'));
// app.use(authenticate.user);
// app.use(express.static(path.join(__dirname, '../client/private')));

// fs.readdirSync(__dirname + '/routes').forEach(
//   function (file) {
//     require('./routes/' + file)(app,db);
//   }
// );


require('./routes/login')(app,db);
require('./routes/user')(app,db);
require('./routes/event')(app,db);
require('./routes/category')(app,db);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
