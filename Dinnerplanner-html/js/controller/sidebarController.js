var sidebarController = function (parent, view, dinnerModel) {
	console.info("Loading sidebarController");

	$("#guestCount").change( function(){
		dinnerModel.setNumberOfGuests($("#guestCount").val());
	});

	$("#confirmDinnerButton").click( function(){
		parent.changeView([4]);
	});

	this.update = function(){
		view.update();

		var dishes = view.getContainer().find(".tableRow");
		for(var i=0; i<dishes.length; i++){
			$(dishes[i]).click(function(){
				var dishID = $(this).find(".dishID").text()
				console.info("sidebarViewController.update().tableRow new activeDishID "+dishID);
				dinnerModel.setActiveDishID(dishID);
			});
		};
	};

	this.getContainer = function (){
		return view.getContainer();
	};

	// Add the controller to the list of observers
	dinnerModel.addObserver(this);
};
