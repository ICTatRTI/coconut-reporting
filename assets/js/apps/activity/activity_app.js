CocoManager.module("ActivityApp", function(ActivityApp, CocoManager, Backbone, Marionette, $, _){
  ActivityApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
	  "activity/:name" : "showActivity"			
    }
  });

  var API = {
    showActivity: function(name){	
      ActivityApp.Show.Controller.showActivity(name);
    },	
  };

  CocoManager.on("activity:show", function(activity){
    CocoManager.navigate("activity/"+activity);
    API.showActivity(activity);
  });


  ActivityApp.on("start", function(){
    new ActivityApp.Router({
      controller: API
    });
  });
});