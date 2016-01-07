CocoManager.module("ReportsApp.List", function(List, CocoManager, Backbone, Marionette, $, _){

  List.ReportView = Marionette.ItemView.extend({
	className: "report-content",
	template: "#report-template",
	
	  events: {
	  	"click div.dropDownBtn": "showAnalysisSection"
	  },
	  
  	showAnalysisSection: function(e){
  		e.preventDefault();
		var $target = $(e.currentTarget); 
    	$target.next("div.dropdown-section").slideToggle();
		
		var iconStatus = $target.find("i").text()== "file_download" ? "file_upload" : "file_download";
		$target.find("i").text(iconStatus);
  	}
	  
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