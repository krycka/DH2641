var appController = function (views, dinnerModel) {
	console.info("appController");

	var activeView = [0];
	var controllers = [];


	//Initiate all views and controllers
	var pages = {
		start: 0,
		sidebar: 1,
		selectDish: 2,
		dishDetails: 3,
		dinnerOverview: 4,
		instructions: 5,
	};

	
	var controllers = [
		new startController(			this, 	views[0],	dinnerModel),
		new sidebarController(			this,	views[1], 	dinnerModel),
		new selectDishController(		this,	views[2],	dinnerModel),
		new dishDetailsController(		this,	views[3],	dinnerModel),
		new dinnerOverviewController(	this,	views[4],	dinnerModel),
		new instructionsController(	this,	views[5],	dinnerModel)
	];


	this.changeView = function(to){
		console.info("appController.changeView() to: "+ to + " activeView " + activeView);

		//Hide views
		for(var i = 0; i < activeView.length; i++){
			var outContainer = controllers[activeView[i]].getContainer();
			outContainer.fadeOut(500);
		};

		//Show views
		for(var i = 0; i < to.length; i++){
			var inContainer = controllers[to[i]].getContainer();
			inContainer.fadeIn(500);
			//inContainer.show();
			//views[to[i]].update();
			//inContainer.animate({width:'toggle'},350);	
		};

		activeView = to;
	};
}