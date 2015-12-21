var errorHandler 	=	require('errorhandler'),
		express 			= require('express'),
		fs 						= require('fs'),
		nib 					= require('nib'),
		path 					=	require('path'),
		stylus 				= require('stylus');
		
		

var app 					= express(), 
		port 					= process.env.PORT || 8005;

function compile(str, path){
		return stylus(str)
					.set('filename', path) 
					.use(nib());
	}

// Configure templating related things.
app.set('views', __dirname + '/views');		// Tells Express where we will keep our views
app.set('view engine', 'jade');						// Tells Express that we want to use Jade
app.use(stylus.middleware({								
	src: 			__dirname + '/client',
	compile: 	compile
}));

app.use(express.static(path.join(__dirname, 'client')));
app.use(errorHandler({
	dumpExceptions: true,
	showStack: true
}));

app.get('/', function(req, res){
	res.render('index', {
		title: 'Home'
	});
});

app.get('/child', function(req, res){
	res.render('child', {
		title: 'Child'
	});
});

app.listen(port);

console.log('Listening to port: ' + port);