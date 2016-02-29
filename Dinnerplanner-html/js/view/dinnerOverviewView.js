//ExampleView Object constructor
var dinnerOverviewView = function (container, dinnerModel) {
	console.info("Loading dinnerOverviewView");
	
	this.update = function() {
		container.find(".guestCount").text(dinnerModel.getNumberOfGuests());

		var menu = dinnerModel.getFullMenu();

		// Starter
		var starterCost = dinnerModel.getPrice(menu[0]);

		// Main
		var mainCost = dinnerModel.getPrice(menu[1]);

		// Dessert
		var dessertCost = dinnerModel.getPrice(menu[2]);


		container.find(".starterImage").attr("src", "images/"+menu[0].image);
		container.find(".starterName").text(menu[0].name);
		container.find(".starterCost").text(starterCost+" SEK");

		container.find(".mainImage").attr("src", "images/"+menu[1].image);
		container.find(".mainName").text(menu[1].name);
		container.find(".mainCost").text(mainCost+" SEK");

		container.find(".dessertImage").attr("src", "images/"+menu[2].image);
		container.find(".dessertName").text(menu[2].name);
		container.find(".dessertCost").text(dessertCost+" SEK");


		$("#overviewTotal").find(".totalCost").text(dinnerModel.getTotalMenuPrice() + " SEK");
	};

	this.getContainer = function(){
		return container;
	}
}