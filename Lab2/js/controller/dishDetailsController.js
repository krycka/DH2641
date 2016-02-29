var dishDetailsController = function (parent, view, dinnerModel) {
	console.info("Loading dishDetailsController");

	$("#backButton").click( function(){
	  console.info("dishDetailsController.backButton.click()");
	  parent.changeView([1,2]);
	  dinnerModel.setActiveDishID(0);
	});

	$("#confirmButton").click( function(){
	  console.info("dishDetailsController.confirmButton.click()");
	  dinnerModel.addDishToMenu(dinnerModel.getActiveDishID());
	  dinnerModel.setActiveDishID(0);
	  parent.changeView([1,2]);
	});

	this.update = function(){
		view.update();
	};

	this.getContainer = function (){
		return view.getContainer();
	};

	// Add the controller to the list of observers
	dinnerModel.addObserver(this);
};
