CocoManager.module("HeaderApp", function(Header, CocoManager, Backbone, Marionette, $, _){
  var API = {
    showHeader: function(){
      Header.Show.Controller.listHeader();
    },
	rightMenu: function(){
	 Header.Show.Controller.rightMenu();	
	}
  };

  CocoManager.commands.setHandler("set:active:header", function(name){
    CocoManager.HeaderApp.Show.Controller.setActiveHeader(name);
  });

  Header.on("start", function(){
    API.showHeader();
  });
});
