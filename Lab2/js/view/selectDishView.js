//ExampleView Object constructor
var selectDishView = function (container, dinnerModel) {
	console.info("Loading selectDishView");
	
	var controller = "";

	this.update = function() {
		var searchText = $("#dishSearchField").val();
		var courseType = $("#courseType").find(":selected").val();

		if(searchText == "Enter key words")
			searchText = "";

		var dishes = dinnerModel.getAllDishes(courseType, searchText);
		if(dishes == false){
			console.warn("selectDishView.update() No dishes found!")
		}
		//var dishes = dinnerModel.getAllDishes("starter");

		// Clear all elements in the list
		container.find("#selectDishList").html("");
		// Populate with new dishes
		for (var i=0; i<dishes.length; i++) {
			container.find("#selectDishList").append("\
				<div class=\"dishItem col-md-2\">\
					<span class=\"dishID\" style=\"display: none;\">"+dishes[i].id+"</span>\
					<img src=\"images/"+ dishes[i].image +"\" />\
					<p class=\"dishName\">"+ dishes[i].name +"</p>\
					<p class=\"dishDescription\">"+ dishes[i].description +"</p>\
				</div>");
		};
	};

	this.getContainer = function(){
		return container;
	};

	this.setController = function(controller) {
		this.controller = controller;
	}
}