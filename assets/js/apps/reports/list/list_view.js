CocoManager.module("ReportsApp.List", function(List, CocoManager, Backbone, Marionette, $, _){

  List.ReportView = Marionette.ItemView.extend({
	className: "report-content",
	template: "#report-template",
  });
  
  List.ReportOptionsView = Marionette.ItemView.extend({
	  className: "report-header",  
	template: "#report-options-template",
	  
	events: {
	      "click span#filters-drop": "showDateFilter"

	},
	
	showDateFilter: function(e){
		e.preventDefault();
		$("div#filters-section").slideToggle();
	}
	
	
  });  

});