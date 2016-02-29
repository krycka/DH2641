var dinnerOverviewController = function (parent, view, dinnerModel) {
	console.info("Loading dinnerOverviewController");

	this.update = function(){
		view.update();
	};
	
	$("#editDinner").click( function(){
	  console.info("dinnerOverView.click()");
	  parent.changeView([1,2]);
	});
	
	$("#printRecipe").click( function(){
	    console.info("printrecipe.click()");
	    parent.changeView([5]);
	});
	


	this.getContainer = function (){
		return view.getContainer();
	};

	// Add the controller to the list of observers
	dinnerModel.addObserver(this);
};