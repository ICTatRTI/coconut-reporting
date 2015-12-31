CocoManager.module("Dashboard", function(Dashboard, CocoManager, Backbone, Marionette, $, _){
  Dashboard.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "dashboard" : "showDashboard"
    }
  });

  var API = {
    showDashboard: function(){
      Dashboard.Show.Controller.showDashboard();
      CocoManager.execute("set:active:header", "about");
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
  });
});