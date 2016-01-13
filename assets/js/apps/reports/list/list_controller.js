CocoManager.module("ReportsApp.List", function(List, CocoManager, Backbone, Marionette, $, _){
  List.Controller = {
	showReport: function(report_title){			  
		var report_name = report_title == null ? "" : report_title+".html";
		
		// Loading mockup html pages
	    $("#report-template").load(templates_path + report_name, function(){
			Marionette.TemplateCache.clear("#report-template");
	  	    var rptHeaderView = new List.ReportOptionsView();			
			var reportView = new List.ReportView();

		    CocoManager.dashboard.dashHeaderRegion.show(rptHeaderView);
		    CocoManager.dashboard.dashMainRegion.show(reportView);	
	    });   
	}	
  }
});