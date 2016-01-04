CocoManager.module("Dashboard.Show", function(Show, CocoManager, Backbone, Marionette, $, _){
  
  Show.DashboardView = Marionette.ItemView.extend({ 
	template: "#maincontent-template"
  });
  
  Show.DashheaderView = Marionette.ItemView.extend({
	template: "#dashboard-header"
  });

  Show.ReportView = Marionette.ItemView.extend({
	className: "report-content",
	template: "#report-template",
  });  

  Show.HeaderView = Marionette.ItemView.extend({
	template: "#header-template"
  });

  
});