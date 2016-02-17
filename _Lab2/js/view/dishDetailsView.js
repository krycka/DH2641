//ExampleView Object constructor
var dishDetailsView = function (container) {
	alert("dishDetailsView");
	
	this.container = $("#dishDetails");
	this.dishDetails = 0;
	
	this.detailsupdate = new function() {
		this.dishDetails = dinnerModel.getDish(dinnerModel.activeDishID);

		// Populate dish description box
		$("#dishDescription").find("h2").text(this.dishDetails.name);
		$("#dishDescription").find("img").attr("src", "images/"+this.dishDetails.image);
		$("#dishDescription").find("p").text(this.dishDetails.description);

		$("#ingredients").find(".guestCount").text(dinnerModel.getNumberOfGuests());
		
		// Populate ingredients list
		this.ingredients = this.dishDetails.ingredients;
		this.totalPrice = 0;
		for (var i=0; i<this.ingredients.length; i++) {
			// Calculate total price
			this.totalPrice += this.ingredients[i].price*dinnerModel.getNumberOfGuests();
			// Populate ingredients table element
			$("#ingredients").find(".table").append("\
				<div class=\"tableRow\">\
						<div class=\"col-md-2\">"+this.ingredients[i].quantity*dinnerModel.getNumberOfGuests()+" "+this.ingredients[i].unit+"</div>\
						<div class=\"col-md-7\">"+this.ingredients[i].name+"</div>\
						<div class=\"col-md-1\">SEK</div>\
						<div class=\"col-md-2\">"+this.ingredients[i].price*dinnerModel.getNumberOfGuests()+"</div>\
					</div>");
		};
		// Update total price
		$("#ingredients").find(".totalPrice").text("SEK "+this.totalPrice);

		$("#preparation").find(".instructions").text(this.dishDetails.description)
	};
}
