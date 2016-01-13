CocoManager.module("AdminApp.Show", function(Show, CocoManager, Backbone, Marionette, $, _){

  Show.AdminView = Marionette.ItemView.extend({
	className: "admin-content",
	template: "#admin-template",
  });

  Show.AdminOptionsView = Marionette.ItemView.extend({
	  className: "report-header",  
	template: "#admin-options-template",
  });

});