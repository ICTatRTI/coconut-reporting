CocoManager.module("DrawerApp.Show", function(Show, CocoManager, Backbone, Marionette, $, _){
  Show.Controller = {
    showDrawer: function(){
	  var drawerView = new Show.DrawerView();
	  CocoManager.drawerRegion.show(drawerView);
    }
  };
});