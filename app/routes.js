module.exports = function(app) {

	app.get('/', function(req, res) {
		res.sendfile('./public/layouts/index.html');
	});

};