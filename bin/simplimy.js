module.exports = function(ready_callback, connect_callback, frame_callback, disconnect_callback) 
{
	var simplimy = require('myojs/template/entry.js');
	var hub = new Myo.Hub();
	var locked = true;

	hub.on('ready', function() 
	{
		ready_callback();
	});

	hub.on('connect', function() 
	{
	    connect_callback();
	});

	hub.on('frame', function(frame) 
	{
	    if(!locked && frame.pose.valid)
	    {
		    if(frame.pose.type >= 0 && frame.pose.type < 5)
		    {
		    	frame_callback(frame.pose.type);
		    }
			locked = true;
		}
	});

	hub.on('disconnect', function() 
	{
	    disconnect_callback();
	});
}