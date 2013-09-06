// JS code using express.js to launch server

var express = require('express'),
http = require('http'),
fs = require('fs'),
path = require('path'),
mongoose = require('mongoose'),
passport = require('passport'),
MongoStore = require('connect-mongo')(express);

//Connect to database
//mongoose.connect( 'mongodb://localhost/app_db' );

var app = express();

var conf = {
  db: {
    db: 'app_db',
    host: '127.0.0.1',
    port: 28017,  // Optional, default: 27017
    username: 'admin', // optional
    password: 'secret', // optional
    collection: 'mySessions' // optional, default: sessions
  },
  secret: '076ee61d63aa10a125ea872411e433b9'
};

var dbUrl = 'mongodb://';
dbUrl += 'localhost/' + conf.db.username;
/*+':'+conf.db.password+'@';
dbUrl += conf.db.host+':'+conf.db.port;
dbUrl += '/' + conf.db.db;*/
console.log(dbUrl);
mongoose.connect(dbUrl, (function(){console.log('Connected');var db = mongoose.connection;
console.log(db.name);
}));

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

    app.use(express.cookieParser(
    ));
   app.use(express.session({
	secret: conf.secret,
	maxAge: new Date(Date.now() + 3600000),
	store: new MongoStore({db :
mongoose.connection.db}, function(err) {
	return console.log(err || 'connect-mongo setup ok');
      })
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
    app.use(express.favicon());

/*
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
