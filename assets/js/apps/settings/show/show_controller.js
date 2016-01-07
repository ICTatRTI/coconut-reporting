CocoManager.module("SettingsApp.Show", function(Show, CocoManager, Backbone, Marionette, $, _){
  Show.Controller = {
	showSettings: function(setting_title){			  
			Marionette.TemplateCache.clear("#setting-template","setting-options-template");
	  	    var settingHeadView = new Show.SettingOptionsView();			
			var settingView = new Show.SettingView()

		    CocoManager.dashboard.dashHeaderRegion.show(settingHeadView);
		    CocoManager.dashboard.dashMainRegion.show(settingView);	
	    }  
	}	
});