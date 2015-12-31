CocoManager.module("ReportsApp.List", function(List, CocoManager, Backbone, Marionette, $, _){

  List.ReportView = Marionette.ItemView.extend({
	className: "report-content",
	template: "#report-template",
  });  

  List.DrawerView = Marionette.ItemView.extend({
	template: "#drawer-template"
  });
});