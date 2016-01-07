CocoManager.module("ReportsApp.List", function(List, CocoManager, Backbone, Marionette, $, _){

  List.ReportView = Marionette.ItemView.extend({
	className: "report-content",
	template: "#report-template",
	
	  events: {
	  	"click div.dropDownBtn": "showAnalysisSection",
		  "click span.rpt-suboptions": "showReportSubOption"
	  },
	  
  	showAnalysisSection: function(e){
  		e.preventDefault();
		var $target = $(e.currentTarget); 
    	$target.next("div.dropdown-section").slideToggle();
		
		var iconStatus = $target.find("i").text()== "file_download" ? "file_upload" : "file_download";
		$target.find("i").text(iconStatus);
  	},
	
	showReportSubOption: function(e){
		e.preventDefault();
		var id = $(e.currentTarget).attr('id');
		var target = "div#"+id+"-section";
		$(target).slideToggle();		
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