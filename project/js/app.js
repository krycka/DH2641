$(function() {

	// Make it possible to print debug messages to console on supported browsers.
	// If not supported, we define empty functions to prevent errors in those browsers.
	if (!window.console) console = {};
	console.log 	= console.log 	|| function(){};
	console.warn 	= console.warn 	|| function(){};
	console.error 	= console.error	|| function(){};
	console.info 	= console.info 	|| function(){};
	
	console.info("Debugging activated, if supported.");

	// remove javascript warning
	console.info("Javascript warning hidden.");
	$("#javascriptWarning").hide();

	$("#addActivityForm").hide();
	$("#dayTemplate").hide();	

	// Initiate controllers
	var dayContainerController = new DayContainerController($("#dayContainer"));
	var parkedActController = new ParkedActController($("#parkedAct"));
	var addActivityController = new AddActivityController($("#addActivityForm"));

	model.notifyObservers();	
	
});

