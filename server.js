var express 	= require('express');
var port 		= process.env.PORT || 3000;
var app 		= express();
var router 		= express.Router();
var exphbs  	= require('express-handlebars');
var bodyParser 	= require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// store session state in browser cookie
app.set('trust proxy', 1)

var cookieSession = require('cookie-session')
app.use(cookieSession({
	name: 'session',
	keys: ['key1', 'key2']
}))

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var controllers = {
	home: require('./node-controllers/homeController')(),
	pay: require('./node-controllers/payController')(app)
};

require('./routes')(router, controllers);

app.use('/', router);

app.listen(port);
console.log('listening on port: ', port);