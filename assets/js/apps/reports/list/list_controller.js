CocoManager.module("ReportsApp.List", function(List, CocoManager, Backbone, Marionette, $, _){
  List.Controller = {
    listReports: function(){
	  var drawerView = new List.DrawerView();
	  CocoManager.drawerRegion.show(drawerView);
	  
    }
  };
});