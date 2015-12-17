AppDashboard.module("HeaderApp", function(Header, AppDashboard, Backbone, Marionette, $, _){
  var API = {
    listHeader: function(){
      Header.List.Controller.listHeader();
    },
	rightMenu: function(){
	 Header.List.Controller.rightMenu();	
	}
  };

  AppDashboard.commands.setHandler("set:active:header", function(name){
    AppDashboard.HeaderApp.List.Controller.setActiveHeader(name);
  });

  Header.on("start", function(){
    API.listHeader();
  });
});
