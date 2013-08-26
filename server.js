// JS code using express.js to launch server

var express = require('express'),
http = require('http'),
fs = require('fs'),
path = require('path'),
mongoose = require('mongoose');


var app = express();

//Configuring our app environment
app.configure(function(){
    //all environement
    app.set('port', process.env.PORT || 8080);
    app.set('views', path.join(__dirname,'public/js/views'));
    app.set('view engine', 'ejs');

    //parses request body and populates request.body
    app.use(express.bodyParser());

     //checks request.body for HTTP method overrides
    app.use(express.methodOverride());

    app.use(app.router);
    app.use(express.favicon());

/*
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(require('stylus').middleware(__dirname + '/public'));
*/
    app.use(express.static(path.join(__dirname,'public')));

});


// development only
app.configure('development', function(){
  app.use(express.errorHandler());
    app.use(express.logger());
});

//Render the home page
app.get('/', function(request, response) {
  var buf = fs.readFileSync('index.html');
  response.send(buf.toString());
});

//Create the server
http.createServer(app).listen(app.get('port'), function() {
  console.log("Listening on " + app.get('port'));
});
