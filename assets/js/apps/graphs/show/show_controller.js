CocoManager.module("GraphsApp.Show", function(Show, CocoManager, Backbone, Marionette, $, _){
  Show.Controller = {
	showGraph: function(admin_title){
		    var report_name = graph_title == null ? "" : graph_title+".html";

			// Loading mockup html pages
			$("#admin-template").load(CocoManager.config.templates + report_name, function(){			  
			   Marionette.TemplateCache.clear("#graph-template","graph-options-template");
	  	       var graphHeadView = new Show.GraphOptionsView();			
			   var graphView = new Show.GraphView()

		       CocoManager.dashboard.dashHeaderRegion.show(graphHeadView);
		       CocoManager.dashboard.dashMainRegion.show(graphView);	
			});   
	    }  
	}	
});