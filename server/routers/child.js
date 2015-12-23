var express = require('express'),
		router 	= express.Router();

router.get('/', function(req, res){
	res.render('child/child', {
		title: 'Child'
	});
});

router.get('/about', function(req, res){
	res.send('This is all about child module.');
});

router.all('*', function(req, res){
	res.status(404)        // HTTP status 404: NotFound
  		.send('Requested resource not found under child module.');
});


module.exports = router;