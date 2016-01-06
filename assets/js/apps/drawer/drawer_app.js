CocoManager.module("DrawerApp", function(DrawerApp, CocoManager, Backbone, Marionette, $, _){
  var API = {
    showDrawer: function(){
      DrawerApp.Show.Controller.showDrawer();
    }
  };

  CocoManager.on("drawer:show", function(){
    API.showDrawer();
  });

  DrawerApp.on("start", function(){
		API.showDrawer();
  });
});