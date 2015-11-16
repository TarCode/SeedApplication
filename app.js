var express = require('express'),
    mysql = require('mysql'),
    exphbs  = require('express-handlebars'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    main = require('./routes/main');


var app = express();

var dbOptions = {
     host: 'localhost',
      user: 'root',
      password: 'coder123',
      port: 3306,
      database: 'fitty'
};

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(myConnection(mysql, dbOptions, 'single'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', main.land);

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
