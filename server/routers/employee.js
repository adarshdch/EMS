var express 				= require('express'),
		router 					= express.Router(),
		_ 							= require('lodash'),
		url 						= require('url'),
		employeeModel   = require('../models/employee');


router.get('/', function(req, res){
  employeeModel.getAll(function(error, result){
    if(error) {
          return res.status(400).send(error);
    }
		res.status(200)        
		   .send(result);
		});
});

router.get("/:id", function(req, res) {
	//console.log('id ' + req.params.id + ' query' + req.query);

	
	/*if(!req.query.document_id) {
	  return res.status(400).send({"status": "error", "message": "A document id is required"});
	}*/

	employeeModel.getByDocumentId(req.params.id, function(error, result) {
	  if(error) {
	      return res.status(400).send(error);
	  }
	  res.send(result);
	});
});

router.get("/:id/reports", function(req, res) {
	employeeModel.getReportsById(req.params.id, function(error, result) {
	  if(error) {
	      return res.status(400).send(error);
	  }
	  res.send(result);
	});
});


module.exports = router;