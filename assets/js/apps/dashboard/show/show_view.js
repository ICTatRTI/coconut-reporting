CocoManager.module("Dashboard.Show", function(Show, CocoManager, Backbone, Marionette, $, _){

  Show.MainView = Marionette.ItemView.extend({
	className: "page-content",
	template: "#main-template"
  });

  Show.ReportView = Marionette.ItemView.extend({
	className: "report-content",
	template: "#report-template",
  });  

  Show.HeaderView = Marionette.ItemView.extend({
	template: "#header-template"
  });

  Show.DrawerView = Marionette.ItemView.extend({
	template: "#drawer-template"
  });
});