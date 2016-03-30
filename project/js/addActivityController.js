var AddActivityController = function(container){
  
  	container.find(".button").click( function(){
  	  console.info("Send form");
  	  
  	  //save parameters to activity
  	  var name = container.find("#name").val();
  	  var desc = container.find("#desc").val();
  	  var length = Math.floor(container.find("#length").val());
  	  var typeid = Math.floor(container.find("#type option:selected").attr("id"));
  	  
  	  
  	 //create new activity
  	  var activity = new Activity(name,length,typeid,desc);
  	  
  	  //add activity to model
  	  model.addParkedActivity(activity,0);
  	  console.info("Send form" + " " + name + " " + desc + " " + length + " " + typeid);
  	  
  	  //clear form
  	  container.find("#addActivity")[0].reset();
  	  
  	  //TODO hide form
  	  
	});
  
};