var sidebarView = function (container, dinnerModel) {
	console.info("Loading sidebarView");

	this.update = function() {

	    container.find(".guestCount").val(dinnerModel.getNumberOfGuests());
	    
	    var menu = dinnerModel.getFullMenu();
	    container.find(".table").html("");
	    for(i = 0; i < menu.length; i++){
	      //if(menu[i].id == 0)
	        //break;
	      
	         	container.find(".table").append("\
	    				<div class=\"tableRow\">\
	    				<span class=\"dishID\" style=\"display: none;\">"+menu[i].id+"</span>\
						<span class=\"pull-left\">" + menu[i].name + "</span><span class=\"pull-right\">"
						+ (dinnerModel.getPrice(menu[i])) + "</span>\
					</div>\
				</div>\
				");
			};
		container.find(".totPrice").html("SEK " + dinnerModel.getTotalMenuPrice());
	}

	this.getContainer = function(){
		return container;
	}
}
