CocoManager.module("GraphsApp", function(GraphsApp, CocoManager, Backbone, Marionette, $, _){
  GraphsApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
	  "graphs/:name" : "showGraph"			
    }
  });

  var API = {
    showGraph: function(name){	
      GraphsApp.Show.Controller.showGraph(name);
    },	
  };

  CocoManager.on("graph:show", function(itemName){
    CocoManager.navigate("graphs/"+itemName);
    API.showGraph(itemName);
  });


  GraphsApp.on("start", function(){
    new GraphsApp.Router({
      controller: API
    });
  });
});