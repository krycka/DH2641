var ParkedActController = function(_container){
	var container = _container;
	var view = new ParkedActView(container);

	var list = container.find(".actList");

	// Parked controller..

	// new activity button
	container.find("#createButton").click(function(){
		$("#addActivityForm").dialog({	
								modal: 	true,
								autoOpen: true,
								show: { effect: "slideDown", duration: 300 } /* If the value is an object, then effect, delay, duration, and easing properties may be provided to show the dialog.*/
							});
		console.info("createButton click");
	});

	makeDynList(list);

	model.addObserver(this);
	
	this.update = function(){
		console.info("parkedActController.update()");
		view.update();
	};
};