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

module.exports = router;