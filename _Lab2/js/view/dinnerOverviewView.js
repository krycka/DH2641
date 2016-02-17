//ExampleView Object constructor
var dinnerOverviewView = function (container) {
	alert("dinnerOverViewView");
	
	this.update = new function() {
		$("#overviewHeader").find(".guestCount").text(dinnerModel.getNumberOfGuests());

		this.menu = dinnerModel.getFullMenu();

		// Starter
		this.starterCost = 0;
		for(var i=0; i<this.menu[0].ingredients.length; i++) {
			this.starterCost += this.menu[0].ingredients[i].price;
		}
		this.starterCost *= dinnerModel.getNumberOfGuests();

		// Main
		this.mainCost = 0;
		for(var i=0; i<this.menu[1].ingredients.length; i++) {
			this.mainCost += this.menu[1].ingredients[i].price;
		}
		this.mainCost *= dinnerModel.getNumberOfGuests();

		// Dessert
		this.dessertCost = 0;
		for(var i=0; i<this.menu[2].ingredients.length; i++) {
			this.dessertCost += this.menu[2].ingredients[i].price;
		}
		this.dessertCost *= dinnerModel.getNumberOfGuests();

		$("#dinnerOverview").find(".starterImage").attr("src", "images/"+this.menu[0].image);
		$("#dinnerOverview").find(".starterName").text(this.menu[0].name);
		$("#dinnerOverview").find(".starterCost").text(this.starterCost+" SEK");

		$("#dinnerOverview").find(".mainImage").attr("src", "images/"+this.menu[1].image);
		$("#dinnerOverview").find(".mainName").text(this.menu[1].name);
		$("#dinnerOverview").find(".mainCost").text(this.mainCost+" SEK");

		$("#dinnerOverview").find(".dessertImage").attr("src", "images/"+this.menu[2].image);
		$("#dinnerOverview").find(".dessertName").text(this.menu[2].name);
		$("#dinnerOverview").find(".dessertCost").text(this.dessertCost+" SEK");


		$("#overviewTotal").find(".totalCost").text(this.starterCost+this.mainCost+this.dessertCost+ "SEK");
	};
}
