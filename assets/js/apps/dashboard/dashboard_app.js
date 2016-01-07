CocoManager.module("Dashboard", function(Dashboard, CocoManager, Backbone, Marionette, $, _){
  Dashboard.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "dashboard" : "showDashboard"
    }
  });

  var API = {
    showDashboard: function(){
	  Backbone.history.navigate("dashboard");	
      Dashboard.Show.Controller.showDashboard();
    },
    showHeader: function(){
      Dashboard.Show.Controller.showHeader();
    }
  };

  CocoManager.on("dashboard:show", function(){
    CocoManager.navigate("dashboard");
    API.showDashboard();
  });

  Dashboard.on("start", function(){
	  
    new Dashboard.Router({
      controller: API
    });
    API.showHeader();
	API.showDashboard();  
  });
});