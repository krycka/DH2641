$(function() {
	// remove javascript warning
	$("#javascriptWarning").hide();

	//We instantiate our model
	//var model = new DinnerModel(); 	//No, it's already loaded, "singleton" "class". We only need one instance of it.
	
	//And create the needed controllers and views
	var mainContainer = $("#container");
	var _selectDishView = new selectDishView(mainContainer);
	var _dishDetailsView = new dishDetailsView(mainContainer);
	var _dinnerOverviewView = new dinnerOverviewView(mainContainer);
	var _instructionsView = new instructionsView(mainContainer);

	_instructionsView.update();
});
