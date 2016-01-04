CocoManager.module("DrawerApp", function(DrawerApp, CocoManager, Backbone, Marionette, $, _){
  DrawerApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "" : "showDrawer"
    }
  });

  var API = {
    showDrawer: function(){
      DrawerApp.Show.Controller.showDrawer();
    }
  };

  CocoManager.on("drawer:show", function(){
    CocoManager.navigate("drawer");
    API.showDrawer();
  });

  DrawerApp.on("start", function(){
    new DrawerApp.Router({
      controller: API
    });
  });
});