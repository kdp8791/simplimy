module.exports = function(app) 
{
	// Load Home Page
	app.get('/', function(req, res)
	{
		res.sendFile('./public/index.html');
	});
}
