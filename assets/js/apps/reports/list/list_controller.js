CocoManager.module("ReportsApp.List", function(List, CocoManager, Backbone, Marionette, $, _){
  List.Controller = {
    listReports: function(){
	  var drawerView = new List.DrawerView();
	  CocoManager.drawerRegion.show(drawerView);	  
    },
	showReport: function(report_title){			  
		var report_name = report_title == null ? "casefollowup.html" : report_title+".html";
	    //CocoManager.Dashboard.Show.Controller.showDashboard();
	    $("#report-template").load(report_name, function(){
	  	    var rptHeaderView = new List.ReportOptionsView();
	        CocoManager.dashboard.dashHeaderRegion.show(rptHeaderView);
			
			var reportView = new List.ReportView();
			CocoManager.dashboard.dashMainRegion.show(reportView);
	    });
	}
	

	
  };
});