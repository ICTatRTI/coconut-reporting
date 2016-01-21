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
	  
	  drawerView.on("activity:clicked", function(activity){
		 CocoManager.trigger("activity:show", activity);
	  });
	  
	  drawerView.on("admin:clicked", function(adm){
		 CocoManager.trigger("admin:show", adm);
	  });
	  
	  drawerView.on("graph:clicked", function(graph){
		 CocoManager.trigger("graph:show", graph);
	  });
	  
	  CocoManager.drawerRegion.show(drawerView);
    },
	
	updateTitle: function(section, newtitle){
		newtitle =section + " <span class='menu-subtitle'>" + newtitle + "</span>";
		$("#layout-title").html(newtitle);	
	}
  };
});