var DayController = function(_container, day){
	var container = _container;
	var view = new DayView(container, day);

	var list = container.find(".actList");
	
	makeDynList(list);

	container.find(".glyphicon-remove").click(function(){
	});

	$(container).find(".startTime").change(function(){
		var time = $(this).val();
		var time = time.split(":");
		day.setStart(parseInt(time[0]), parseInt(time[1]));
	});

	this.update = function(){
		console.info("DayController.update()");
		view.update();
	};
};
