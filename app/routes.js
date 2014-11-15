module.exports = function(app) 
{
	// Load Home Page
	app.get('/', function(req, res)
	{
		res.sendFile('./views/index.html');
	});
}
