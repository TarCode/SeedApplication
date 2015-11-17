var express = require('express'),
    mysql = require('mysql'),
    exphbs  = require('express-handlebars'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    MainMethods = require('./routes/mainMethods'),
    MainDataService = require('./dataServices/mainDataService'),
    ConnectionProvider = require('./routes/connectionProvider');

var app = express();

var dbOptions = {
     host: 'localhost',
      user: 'root',
      password: 'coder123',
      port: 3306,
      database: 'vegadine'
};

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var serviceSetupCallback = function(connection){
	return {
		mainDataService : new MainDataService(connection)
	}
};
var myConnectionProvider = new ConnectionProvider(dbOptions, serviceSetupCallback);
app.use(myConnectionProvider.setupProvider);
app.use(myConnection(mysql, dbOptions, 'pool'));


var main = new MainMethods();
app.get('/', main.land);
app.get('/restaurants', main.show_restaurants);
app.get('/restaurants/new', main.show_add_restaurant);

app.get('/sign_up', main.show_sign_up);
app.post('/sign_up', main.post_sign_up);
app.get('/login', main.show_login);
app.post('/login', main.post_login);



var port = process.env.PORT || 3000;
var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
