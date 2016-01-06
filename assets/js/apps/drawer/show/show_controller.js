CocoManager.module("DrawerApp.Show", function(Show, CocoManager, Backbone, Marionette, $, _){
  Show.Controller = {
    showDrawer: function(){
	  var drawerView = new Show.DrawerView();
	  
	  drawerView.on("report:clicked", function(reportname){
		  CocoManager.trigger("reports:show", reportname);
	  });
	  
	  CocoManager.drawerRegion.show(drawerView);
    }
  };
});