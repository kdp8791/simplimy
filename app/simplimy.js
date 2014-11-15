var simplimy = require('myojs/template/entry.js');

var hub = new Myo.Hub();

hub.on('ready', function()
{
	console.log("ready");
});

hub.on('connect', function()
{
    console.log("connected");
});

hub.on('frame', function(frame)
{
    // Get the most recent frame and report some basic information
    // console.log("Frame id: " + frame.id + ", timestamp: " + frame.timestamp);
    if(frame.pose.valid == true)
    {

	    switch(frame.pose.type)
	    {
		    case 0:
		        console.log("REST");
		        break;
		    case 1:
		        console.log("FIST");
		        break;
		    case 2:
		    	console.log("WAVE IN");
		    	break;
		   	case 3:
		   		console.log("WAVE OUT");
		   		break;
		   	case 4:
		   		console.log("FINGER SPREAD");
		   		break;
		    default:
		    	console.log("ERR!");
		        break;
		}
	}
});

hub.on('disconnect', function()
{
    console.log("disconnect");
});
