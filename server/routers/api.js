var express 				= require('express'),
		router 					= express.Router(),
		employeeRouter 	= require('./employee');


router.get('/', function(req, res){
	res.status(200)        
  		.send(req.originalUrl + '  found');
});

router.get('/about', function(req, res){
	res.send('This is all about employee module.');
});

router.use('/employees', employeeRouter);

module.exports = router;