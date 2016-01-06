var express 			   =	require('express'),
		router 				   = express.Router(),
    apiRouter   = require('./api'),
		childRouter 	   = require('./child');

router.use(function timeLog(req, res, next){
	console.log('Time: ' + Date.now() + '  ' + req.originalUrl);
	next();
});

router.get('/', function(req, res){
	res.render('index', {
		title: 'Home'
	});
});

/*router.post('/api/save', function(req, res){
		if(!req.body.firstname) {
        return res.status(400).send({"status": "error", "message": "A firstname is required"});
    } else if(!req.body.lastname) {
        return res.status(400).send({"status": "error", "message": "A lastname is required"});
    } else if(!req.body.email) {
        return res.status(400).send({"status": "error", "message": "A email is required"});
    }
    employeeModel.save(req.body, function(error, result) {
      if(error) {
          return res.status(400).send(error);
      }
      res.send(result);
    });
});*/


router.use('/api', apiRouter);
router.use('/child', childRouter);

router.all('*', function(req, res){
	res.status(404)        // HTTP status 404: NotFound
  		.send(req.url + ' not found');
});

module.exports = router;