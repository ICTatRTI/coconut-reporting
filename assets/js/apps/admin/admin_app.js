CocoManager.module("AdminApp", function(AdminApp, CocoManager, Backbone, Marionette, $, _){
  AdminApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
	  "admin/:name" : "showAdmin"			
    }
  });

  var API = {
    showAdmin: function(name){	
      AdminApp.Show.Controller.showAdmin(name);
    },	
  };

  CocoManager.on("admin:show", function(itemName){
    CocoManager.navigate("admin/"+itemName);
    API.showAdmin(itemName);
  });


  AdminApp.on("start", function(){
    new AdminApp.Router({
      controller: API
    });
  });
});