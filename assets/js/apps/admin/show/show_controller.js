CocoManager.module("AdminApp.Show", function(Show, CocoManager, Backbone, Marionette, $, _){
  Show.Controller = {
	showAdmin: function(admin_title){
		    var report_name = admin_title == null ? "" : admin_title+".html";

			// Loading mockup html pages
			$("#admin-template").load(CocoManager.config.templates + report_name, function(){			  
			   Marionette.TemplateCache.clear("#admin-template","admin-options-template");
	  	       var adminHeadView = new Show.AdminOptionsView();			
			   var adminView = new Show.AdminView()

		       CocoManager.dashboard.dashHeaderRegion.show(adminHeadView);
		       CocoManager.dashboard.dashMainRegion.show(adminView);	
			});   
	    }  
	}	
});