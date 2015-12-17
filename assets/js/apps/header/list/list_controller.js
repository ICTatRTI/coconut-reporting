AppDashboard.module("HeaderApp.List", function(List, AppDashboard, Backbone, Marionette, $, _){
  List.Controller = {
    listHeader: function(){
      var links = AppDashboard.request("header:entities");
      var headers = new List.Headers({collection: links});

      headers.on("brand:clicked", function(){
        AppDashboard.trigger("contacts:list");
      });

      headers.on("childview:navigate", function(childView, model){
        var trigger = model.get("navigationTrigger");
        AppDashboard.trigger(trigger);
      });

      AppDashboard.regions.header.show(headers);
    },
	rightMenu: function(){
	   var 	
	},

    setActiveHeader: function(headerUrl){
      var links = AppDashboard.request("header:entities");
      var headerToSelect = links.find(function(header){ return header.get("url") === headerUrl; });
      headerToSelect.select();
      links.trigger("reset");
    }
  };
});
