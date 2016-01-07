CocoManager.module("DrawerApp.Show", function(Show, CocoManager, Backbone, Marionette, $, _){
  Show.Controller = {
    showDrawer: function(){
	  var drawerView = new Show.DrawerView();
	  
	  drawerView.on("report:clicked", function(reportname){
		  CocoManager.trigger("reports:show", reportname);
	  });
	
	  drawerView.on("setting:clicked", function(setting){
		 CocoManager.trigger("setting:show", setting);
	  });
	  
	  CocoManager.drawerRegion.show(drawerView);
    }
  };
});