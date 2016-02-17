//ExampleView Object constructor
var instructionsView = function (container) {
	alert("instructionsView");
	
	//this.container = $("#instruction");
	
	this.update = new function() {
		$("#instructions").find(".guestCount").text(dinnerModel.getNumberOfGuests());

		this.menu = dinnerModel.getFullMenu();

		$("#starterImage").attr("src", "images/"+this.menu[0].image);
		$("#starterText").find("h3").text(this.menu[0].name);
		$("#starterText").find("p").text(this.menu[0].description);
		$("#starterPreparation").find("p").text(this.menu[0].description);

		$("#mainImage").attr("src", "images/"+this.menu[1].image);
		$("#mainText").find("h3").text(this.menu[1].name);
		$("#mainText").find("p").text(this.menu[1].description);
		$("#mainPreparation").find("p").text(this.menu[1].description);

		$("#dessertImage").attr("src", "images/"+this.menu[2].image);
		$("#dessertText").find("h3").text(this.menu[2].name);
		$("#dessertText").find("p").text(this.menu[2].description);
		$("#dessertPreparation").find("p").text(this.menu[2].description);


		$("#overviewTotal").find(".totalCost").text(this.starterCost+this.mainCost+this.dessertCost+ "SEK");
	};
}
