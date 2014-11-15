module.exports = function(router)
{
	// Load Home Page
	router.get('/', function(req, res)
	{
		res.sendFile('./views/index.html');
	});

	// Landing Page
	router.get('/landing', function(req, res)
	{
		res.sendFile('./views/landing.html');
	});


}
