let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL_AWS = require('slappforge-sdk-aws');
const rds = new SL_AWS.RDS(connectionManager);
exports.handler = function (event, context, callback) {

	// You can pass the existing connection to this function.
	// A new connection will be created if it's not present as the third param 
	// You must always end/destroy the DB connection after it's used
	rds.query({
		instanceIdentifier: 'issuevalidator',
		query: 'INSERT INTO(Employee)VALUES(Andun)',
		inserts: []
	}, function (error, results, connection) {
		if (error) {
			console.log("Error occurred");
			throw error;
		} else {
			console.log("Success")
			console.log(results);
		}

		connection.end();
	});


	callback(null, 'Successfully executed');
}