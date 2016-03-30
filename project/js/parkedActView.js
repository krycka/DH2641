var ParkedActView = function(_container) {
	var container = _container;


	this.update = function(){
		console.info("ParkedActView.update()");
		//list.empty();
		container.find(".actList").html("");
		appendDayList(container.find(".actList"), model.parkedActivities);

	};

	this.getList = function(){
		return list;
	};

	this.getContainer = function(){
		return container;
	};
};