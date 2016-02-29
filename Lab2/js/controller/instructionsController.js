var instructionsController = function (parent, view, dinnerModel) {
	console.info("Loading instructionsController");

	this.update = function(){
		view.update();
	};
	
	$("#editDinnerInstr").click( function(){
	  console.info("instructions edit dinner .click()");
	  parent.changeView([1,2]);
	});

	this.getContainer = function (){
		return view.getContainer();
	};

	// Add the controller to the list of observers
	dinnerModel.addObserver(this);
};