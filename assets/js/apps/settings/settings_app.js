CocoManager.module("SettingsApp", function(SettingsApp, CocoManager, Backbone, Marionette, $, _){
  SettingsApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
	  "settings/:name" : "showSetting"			
    }
  });

  var API = {
    showSetting: function(name){	
      SettingsApp.Show.Controller.showSettings(name);
    },	
  };

  CocoManager.on("setting:show", function(setting){
    CocoManager.navigate("settings/"+setting);
    API.showSetting(setting);
  });


  SettingsApp.on("start", function(){
    new SettingsApp.Router({
      controller: API
    });
  });
});