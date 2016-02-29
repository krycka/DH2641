//ExampleView Object constructor
var instructionsView = function (container, dinnerModel) {
	console.info("Loading instructionsView");
	
	this.update = function() {
		container.find(".guestCount").text(dinnerModel.getNumberOfGuests());

		var menu = dinnerModel.getFullMenu();

		$("#starterImage").attr("src", "images/"+menu[0].image);
		$("#starterText").find("h3").text(menu[0].name);
		$("#starterText").find("p").text(menu[0].description);
		$("#starterPreparation").find("p").text(menu[0].description);

		$("#mainImage").attr("src", "images/"+menu[1].image);
		$("#mainText").find("h3").text(menu[1].name);
		$("#mainText").find("p").text(menu[1].description);
		$("#mainPreparation").find("p").text(menu[1].description);

		$("#dessertImage").attr("src", "images/"+menu[2].image);
		$("#dessertText").find("h3").text(menu[2].name);
		$("#dessertText").find("p").text(menu[2].description);
		$("#dessertPreparation").find("p").text(menu[2].description);


		//$("#overviewTotal").find(".totalCost").text(starterCost+mainCost+dessertCost+ "SEK");
	};

	this.getContainer = function(){
		return container;
	};
}