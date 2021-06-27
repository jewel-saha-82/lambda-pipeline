exports.handler = (event, context, callback) => {
	callback(null, {
		statusCode: '200',
		body: 'Dude, this is nodejs.'
	});
};