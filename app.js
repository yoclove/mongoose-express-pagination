// require the file that database schema, model and connection lives in
require('./db'); 

var express = require('express');
var admin = require('./routes/admin'); // require admin.js inside routes folder
var http = require('http');

var app = module.exports = express();

app.use(express.bodyParser());

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/admin', admin.index); // admin landpage

// usersperpage controller, posts the number of results per page which a user selects from a dropdown menu
app.post('/admin/usersperpage', admin.usersperpage);

// pagination for user list in admin's area
// admin is the controller's name (admin.js), inside routes folder
// page is the name of the method that fetches the data from the User model
// :id is the number of the page in url
app.post('/admin/page/:id', admin.page); 

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
