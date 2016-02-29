//ExampleView Object constructor
var dishDetailsView = function (container, dinnerModel) {
	console.info("Loading dishDetailsView");
	
	//dishDetails = 0;	
	this.update = function() {
		var dishDetails = dinnerModel.getDish(dinnerModel.getActiveDishID());
		console.info("dishDetailsView.update() dinnerModel.getActiveDishID(): "+dinnerModel.getActiveDishID());

		// Populate dish description box
		$("#dishDescription").find("h2").text(dishDetails.name);
		$("#dishDescription").find("img").attr("src", "images/"+dishDetails.image);
		$("#dishDescription").find("p").text(dishDetails.description);

		$("#ingredients").find(".guestCount").text(dinnerModel.getNumberOfGuests());
		
		// Clear ingredients list
		$("#ingredients").find(".table").html("");
		// Populate ingredients list
		var ingredients = dishDetails.ingredients;
		var totalPrice = 0;
		for (var i=0; i<ingredients.length; i++) {
			// Calculate total price
			totalPrice += ingredients[i].price*dinnerModel.getNumberOfGuests();
			// Populate ingredients table element
			$("#ingredients").find(".table").append("\
				<div class=\"tableRow\">\
						<div class=\"col-md-2\">"+ingredients[i].quantity*dinnerModel.getNumberOfGuests()+" "+ingredients[i].unit+"</div>\
						<div class=\"col-md-7\">"+ingredients[i].name+"</div>\
						<div class=\"col-md-1\">SEK</div>\
						<div class=\"col-md-2\">"+ingredients[i].price*dinnerModel.getNumberOfGuests()+"</div>\
					</div>");
		};
		// Update total price
		$("#ingredients").find(".totalPrice").text("SEK "+totalPrice);

		$("#preparation").find(".instructions").text(dishDetails.description)
	};

	this.getContainer = function(){
		return container;
	}
}
