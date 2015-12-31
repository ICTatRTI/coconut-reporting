CocoManager.module("HeaderApp.Show", function(Show, CocoManager, Backbone, Marionette, $, _){
  Show.Controller = {
    listHeader: function(){
      var links = CocoManager.request("header:entities");
      var headers = new Show.Headers({collection: links});

      headers.on("brand:clicked", function(){
        CocoManager.trigger("contacts:list");
      });

      headers.on("childview:navigate", function(childView, model){
        var trigger = model.get("navigationTrigger");
        CocoManager.trigger(trigger);
      });

      CocoManager.headerRegion.show(headers);
    },
	rightMenu: function(){
	   
	},

    setActiveHeader: function(headerUrl){
      var links = CocoManager.request("header:entities");
      var headerToSelect = links.find(function(header){ return header.get("url") === headerUrl; });
      headerToSelect.select();
      links.trigger("reset");
    }
  };
});
