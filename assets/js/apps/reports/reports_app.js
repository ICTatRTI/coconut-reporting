CocoManager.module("ReportsApp", function(ReportsApp, CocoManager, Backbone, Marionette, $, _){
  ReportsApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "reports" : "showReports"
    }
  });

  var API = {
    listReports: function(){
      ReportsApp.List.Controller.listReports();
      //CocoManager.execute("set:active:header", "reports");
    }
  };

  CocoManager.on("reports:show", function(){
    CocoManager.navigate("reports");
    API.listReports();
  });

  ReportsApp.on("start", function(){
    new ReportsApp.Router({
      controller: API
    });
  });
});