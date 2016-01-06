var couchbase		= require('couchbase'),
		config 			= require('./config');

//console.log(module.exports.bucket);
//console.log(config.couchbase.bucket);
// Configure templating related things.


module.exports = {
	bucket: (new couchbase.Cluster(config.couchbase.server)).openBucket(config.couchbase.bucket)
};