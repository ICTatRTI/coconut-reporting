CocoManager.module("ReportsApp", function(ReportsApp, CocoManager, Backbone, Marionette, $, _){
  ReportsApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
	  "reports/:name" : "showReport"			
    }
  });

  var API = {
    showReport: function(name){	
      ReportsApp.List.Controller.showReport(name);
    },	
  };

  CocoManager.on("reports:show", function(reportname){
    CocoManager.navigate("reports/"+reportname);
    API.showReport(reportname);
  });

  ReportsApp.on("start", function(){
    new ReportsApp.Router({
      controller: API
    });
	$("#report-options-template").load(CocoManager.config.templates + "dates_filter.html");
  });
});