var uuid 	= require("uuid"),
		db 	= require('../connection').bucket;

var config = require("../config");
var N1qlQuery = require('couchbase').N1qlQuery;
 
function EmployeeModel() { };
 
//console.log('bucket: ' + con.bucket);

EmployeeModel.save = function(data, callback) {
    var jsonObject = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email
    }
    var documentId = data.document_id ? data.document_id : uuid.v4();
    db.upsert(documentId, jsonObject, function(error, result) {
        if(error) {
            callback(error, null);
            return;
        }
        callback(null, {message: "success", data: result});
    });
};

EmployeeModel.delete = function(documentId, callback) {
    db.remove(documentId, function(error, result) {
        if(error) {
            callback(error, null);
            return;
        }
        callback(null, {message: "success", data: result});
    });
};

EmployeeModel.getAll = function(callback) {
    var statement = "SELECT * " +
                    "FROM `" + config.couchbase.bucket + "` AS users";
    var query = N1qlQuery.fromString(statement).consistency(N1qlQuery.Consistency.REQUEST_PLUS);
    db.query(query, function(error, result) {
        if(error) {
            return callback(error, null);
        }
        var data = [];
        for(var count = 0; count < result.length; count++)
            data[count] = result[count].users;
        
        callback(null, data);
    });
};

EmployeeModel.getReportsById = function(employeeId, callback) {
    var statement = 'SELECT * ' +
                    'FROM ' + config.couchbase.bucket + ' AS employees ' +
                    'WHERE managerId = $1';
    var query = N1qlQuery.fromString(statement).consistency(N1qlQuery.Consistency.REQUEST_PLUS);
    db.query(query, [employeeId], function(error, result) {
        if(error) {
            return callback(error, null);
        }
        var data = [];
        for(var count = 0; count < result.length; count++)
            data[count] = result[count].employees;
        
        callback(null, data);
    });
};


EmployeeModel.getByDocumentId = function(documentId, callback) {

    var statement = "SELECT * " +
                    "FROM `" + config.couchbase.bucket + "` AS users " +
                    "WHERE META(users).id = $1";
    console.log(statement);
    /*var query = N1qlQuery.fromString(statement);
    db.query(query, [documentId], function(error, result) {
        if(error) {
            return callback(error, null);
        }
        callback(null, result);
    });*/
    db.get(documentId, function(err, result) {
        if (err) throw err; 
        callback(null, result.value); 
    });
};

module.exports = EmployeeModel;