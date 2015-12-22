var express 			=	require('express'),
		router 				= express.Router(),
		childRouter 	= require('./child'); 

router.use(function timeLog(req, res, next){
	console.log('Time: ' + Date.now() + '  ' + req.originalUrl);
	next();
});

router.get('/', function(req, res){
	res.render('index', {
		title: 'Home'
	});
});

router.use('/child', childRouter);

router.all('*', function(req, res){
	res.status(404)        // HTTP status 404: NotFound
  		.send('Requested resource not found');
});

module.exports = router;