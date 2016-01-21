CocoManager.module("GraphsApp.Show", function(Show, CocoManager, Backbone, Marionette, $, _){

  Show.GraphsView = Marionette.ItemView.extend({
	className: "admin-content",
	template: "#graph-template",
  });

  Show.GraphsOptionsView = Marionette.ItemView.extend({
	  className: "report-header",  
	template: "#graph-options-template",
  });

});