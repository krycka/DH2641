$(function() {

	// Make it possible to print debug messages to console on supported browsers.
	// If not supported, we define empty functions to prevent errors in those browsers.
	if (!window.console) console = {};
	console.log 	= console.log 	|| function(){};
	console.warn 	= console.warn 	|| function(){};
	console.error 	= console.error	|| function(){};
	console.info 	= console.info 	|| function(){};
	
	console.info("Debugging activated.");

	// remove javascript warning
	console.info("Javascript warning hidden.");
	$("#javascriptWarning").hide();
	

	//We instantiate our model
	console.info("Creating model");
	var dinnerModel = new DinnerModel(); 	//Or singleton? then it's already loaded, "singleton" "class". We only need one instance of it.
	console.info(dinnerModel);

	var views = [
		new startView(		$("#start"), 		dinnerModel),
		new sidebarView(	$("#sidebar"), 		dinnerModel),
		new selectDishView(	$("#selectDish"), 	dinnerModel),
		new dishDetailsView($("#dishDetails"), 	dinnerModel),
		new dinnerOverviewView(	$("#dinnerOverview"), dinnerModel),
		new instructionsView($("#instructions"), dinnerModel)
	];

	var start = new appController(views, dinnerModel);

	//And create the needed controllers and views
	//var mainContainer = $("#container");
	//var _selectDishView = new selectDishView(mainContainer);
	//var _dishDetailsView = new dishDetailsView(mainContainer);
	//var _dinnerOverviewView = new dinnerOverviewView(mainContainer);
	//var _instructionsView = new instructionsView(mainContainer);

});
