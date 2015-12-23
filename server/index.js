var errorHandler 	=	require('errorhandler'),
		express 			= require('express'),
		fs 						= require('fs'),
		nib 					= require('nib'),
		path 					=	require('path'),
		stylus 				= require('stylus');
		
		

var app 					= express(), 
		port 					= process.env.PORT || 8005,
		router 				= require('./routers/router'),
		rootPath 			= path.join(__dirname + './../');

		console.log(rootPath);

function compile(str, path){
		return stylus(str)
					.set('filename', path) 
					.use(nib());
	}

// Configure templating related things.
app.set('views', rootPath + 'server/views');		// Tells Express where we will keep our views
app.set('view engine', 'jade');						// Tells Express that we want to use Jade
app.use(stylus.middleware({								
	src: 			rootPath + 'client',
	compile: 	compile
}));

app.use(express.static(path.join(rootPath, 'client')));

app.use('/', router);			//Modular routing

app.use(errorHandler({
	dumpExceptions: true,
	showStack: true
}));


app.listen(port);

console.log('Listening to port: ' + port);