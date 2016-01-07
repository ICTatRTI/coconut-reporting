CocoManager.module("SettingsApp.Show", function(Show, CocoManager, Backbone, Marionette, $, _){

  Show.SettingView = Marionette.ItemView.extend({
	className: "setting-content",
	template: "#setting-template",
  });

  Show.SettingOptionsView = Marionette.ItemView.extend({
	  className: "report-header",  
	template: "#setting-options-template",
  });

});