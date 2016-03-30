var DayView = function(_container, day){
	var container = _container;
	var activityList = container.find(".actList");
	var startTime;
	var endTime;
	var starth;
	var startm;
	
	this.update = function(){
	  
		container.find(".startTime").val(day.getStart());
		container.find(".endTime").html(day.getEnd());
		container.find(".totalLength").html(day.getTotalLength());


		activityList.html("");
		appendDayList(activityList, day._activities);
		
//		for(var i=0; i<day._activities.length; i++){
//			var activity = day._activities[i];
//			activityList.append("\
//								<li class=\""+activity.getType()+"\">\
//							   		"+activity.getLength()+" min\
//							   		<span class=\"pull-right\">"+activity.getName()+" \
//							   			<span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>\
//							   		</span>\
//							   	</li>");
//		}
	  
	 
	 var totLength = day.getTotalLength();
	 
	 var presLength = day.getLengthByType(0);
	 var gwLength = day.getLengthByType(1);
	 var discLength = day.getLengthByType(2);
	 var brLength = day.getLengthByType(3);
	  //update the summary bar
	  var stats = container.find(".stats");
	  stats.find(".presentation").css("height", Math.floor(presLength*100/totLength) +"px");
	  stats.find(".groupwork").css("height", Math.floor(gwLength*100/totLength) +"px");
	  stats.find(".discussion").css("height", Math.floor(discLength*100/totLength) +"px");
	  stats.find(".break").css("height", Math.floor(brLength*100/totLength) +"px");

	  
	};
};
