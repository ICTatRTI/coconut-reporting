CocoManager.module("ReportsApp", function(ReportsApp, CocoManager, Backbone, Marionette, $, _){
  ReportsApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
	  "reports/:id" : "showReport"			
    }
  });

  var API = {
    listReports: function(){
      ReportsApp.List.Controller.listReports();
      //CocoManager.execute("set:active:header", "reports");
    },
	
    showReport: function(id){	
      ReportsApp.List.Controller.showReport(id);
    },	
  };

  CocoManager.on("reports:list", function(){
    //CocoManager.navigate("reports");
    API.listReports();
  });
  
  CocoManager.on("reports:show", function(){
    //CocoManager.navigate("reports");
    API.showReport();
  });

  ReportsApp.on("start", function(){
    new ReportsApp.Router({
      controller: API
    });
  });
});