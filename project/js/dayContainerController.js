var DayContainerController = function(_container){
	var container = _container;
	var numDays = 0;

	var dayTemplate = container.find("#dayTemplate");
	dayTemplate.removeAttr("id");
	dayTemplate.show();

	var addDayTemplate = container.find("#addDay").clone();
	
	this.update = function(){
		
		container.html("");

		for(var i=0; i<model.days.length; i++){
			console.info("dayContainerController.update() day: "+model.days[i]);
			var dayController = new DayController(newDayContainer(i), model.days[i]);
			dayController.update();
		}

		container.append(addDayTemplate);
			// addDayController                
		$("#addDay").click(function(){
			model.addDay();
			console.info("#addDay click, num days in model: "+model.days.length);
		});
	};

	var newDayContainer = function(id){
		var dayContainer = dayTemplate.clone();
		dayContainer.attr("id", "day_"+id);
		dayContainer.find(".actList").attr("id", "list_"+id);
		container.append(dayContainer);
		return dayContainer;
	}

	model.addObserver(this);
};