CocoManager.module("Dashboard.Show", function(Show, CocoManager, Backbone, Marionette, $, _){
  Show.Controller = {
    showDashboard: function(){
	  var headerView = new Show.HeaderView();
	  CocoManager.headerRegion.show(headerView);

      var mainView = new Show.MainView();
      CocoManager.mainRegion.show(mainView);

	  var drawerView = new Show.DrawerView();
	  CocoManager.drawerRegion.show(drawerView);
	  
    }
  };
});