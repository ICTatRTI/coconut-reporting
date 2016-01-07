CocoManager.module("ActivityApp.Show", function(Show, CocoManager, Backbone, Marionette, $, _){

  Show.ActivityView = Marionette.ItemView.extend({
	className: "activity-content",
	template: "#activity-template",
  });

  Show.ActivityOptionsView = Marionette.ItemView.extend({
	  className: "report-header",  
	template: "#activity-options-template",
  });

});