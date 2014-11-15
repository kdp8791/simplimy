module.exports = function(io) 
{
	var simplimy = require('myojs/template/entry.js');

	var hub = new Myo.Hub();
	var locked = true;

	hub.on('ready', function() 
	{
		io.on('connection', function(socket)
	    {
	    	socket.emit('ready', true);
	    });
	});

	hub.on('connect', function() 
	{
	    io.on('connection', function(socket)
	    {
	    	socket.emit('connected', true);
	    	locked = false;
	    });
	});

	hub.on('frame', function(frame) 
	{
		var ret = -1;
		if(!locked && frame.pose.valid)
    	{
	    	if(frame.pose.type >= 0 && frame.pose.type < 5)
	    	{
	    		ret = frame.pose.type;
	    	}
			locked = true;
		}
		if(ret > -1)
		{
			console.log(ret);
		}
		io.on('connection', function (socket) 
		{
			socket.emit('movement', ret);
		});
	});

	hub.on('disconnect', function() 
	{
	    io.on('connection', function(socket)
	    {
	    	socket.disconnect();
	    });
	});

	io.on('connection', function(socket)
	{
		socket.on('unlock', function(bool)
		{
			console.log(locked);
			locked = bool;
		});
	});

	
}