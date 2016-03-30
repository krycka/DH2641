var DayContainerView = function() {

	var days = {};

	var dayViewTemplate = $("#dayTemplate").clone();
	dayViewTemplate.removeAttr("id");
	
	this.update = function(){
		$("#dayContainer").html("");
		for(var i=0; i<model.days.length; i++){
			//this.updateDay($("#dayContainer"), model.days[i]);
			console.info("dayContainerView.update, day: "+model.days[i])
		}
	};

	this.updateDay = function(parent, day){
		dayView.find(".startTime").val(day.getStart());
		dayView.find(".endTime").html(day.getEnd());
		
		var activityList = dayView.find("ul");
		activityList.html("");
		for(var i=0; i<day._activities.length; i++){
			var activity = day._activities[i];
			activityList.append("\
								<li class=\""+activity.getType()+"\">\
							   		"+activity.getLength()+"\
							   		<span class=\"pull-right\">"+activity.getDescription()+" \
							   			<span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\
							   		</span>\
							   	</li>");
		};

		dayView.show();
		$("#dayContainer").append(dayView);
	};
};