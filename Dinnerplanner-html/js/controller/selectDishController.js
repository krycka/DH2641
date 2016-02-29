var selectDishController = function (parent, view, dinnerModel) {
	console.info("Loading selectDishController");

	var activeDishID = dinnerModel.getActiveDishID(); 

	$("#courseType").change(function(){
		//view.update();
		dinnerModel.forceUpdate();
	});

	$("#searchButton").click(function(){
		//view.update();
		dinnerModel.forceUpdate();
	});



/*	this.dishDetails = function(){
		console.info("selectDishController.dishItem.click() id: " + dishID);
		dinnerModel.setActiveDishID(dishID);
		parent.changeView([1,3]);
	};*/

	this.getContainer = function (){
		return view.getContainer();
	};

	this.update = function(){
		view.update();

		if(activeDishID != dinnerModel.getActiveDishID() ) {
			var oldID = activeDishID;
			activeDishID = dinnerModel.getActiveDishID();
			console.info("selectDishController.update old/new activeDishID: " + oldID+"/"+activeDishID);
			if(dinnerModel.getActiveDishID() != 0){
				parent.changeView([1,3]);
			}
		}

		var dishes = view.getContainer().find(".dishItem");
		for(var i=0; i<dishes.length; i++){
			$(dishes[i]).click(function(){
				var dishID = $(this).find(".dishID").text()
				console.info("selectDishController.update().dishItem new activeDishID "+dishID);
				dinnerModel.setActiveDishID(dishID);
			});
		};
	};

	// Add the controller to the list of observers
	dinnerModel.addObserver(this);
};
