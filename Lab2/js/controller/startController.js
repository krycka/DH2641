var startController = function (parent, view, dinnerModel) {
	console.info("Loading startController");

	// Add the controller to the list of observers
	//dinnerModel.addObserver(this);

	this.update = function(){
		view.update();
	};

	$("#startButton").click( function(){
		console.info("startController.startButton.click()");
		parent.changeView([1,2]);
	});
	
	this.getContainer = function (){
		return view.getContainer();
	}
};
