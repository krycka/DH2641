//ExampleView Object constructor
var selectDishView = function (container) {
	alert("selectDishView");
	
	this.container = $("#selectDishList");
	
	this.update = new function() {
		this.dishes = dinnerModel.getAllDishes($("#courseType").find(":selected").val());

		for (var i=0; i<this.dishes.length; i++) {
			$("#selectDishList").append("\
				<div class=\"dishItem col-md-2\">\
					<img src=\"images/"+ this.dishes[i].image +"\" />\
					<p class=\"dishName\">"+ this.dishes[i].name +"</p>\
					<p class=\"dishDescription\">"+ this.dishes[i].description +"</p>\
				</div>");
		};
	}
}