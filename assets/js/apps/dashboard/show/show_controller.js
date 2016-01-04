CocoManager.module("Dashboard.Show", function(Show, CocoManager, Backbone, Marionette, $, _){
  Show.Controller = {
    showDashboard: function(){
	  var headerView = new CocoManager.HeaderView();
	  CocoManager.headerRegion.show(headerView);
		
	  var dbheaderView = new Show.DashheaderView();
      CocoManager.dashboard.dashHeaderRegion.show(dbheaderView);
	  
	  var mainView = new Show.DashboardView();
	  CocoManager.dashboard.dashMainRegion.show(mainView);
	  
	  var drawerView = new Show.DrawerView();
	  CocoManager.DrawerRegion.show(drawerView);
    }
  };
});