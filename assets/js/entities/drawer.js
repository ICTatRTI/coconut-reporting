CocoManager.module("Entities", function(Entities, CocoManager, Backbone, Marionette, $, _){
  Entities.Drawer = Backbone.Model.extend({
    initialize: function(){
      var selectable = new Backbone.Picky.Selectable(this);
      _.extend(this, selectable);
    }
  });

  Entities.DrawerCollection = Backbone.Collection.extend({
    model: Entities.Drawer,

    initialize: function(){
      var singleSelect = new Backbone.Picky.SingleSelect(this);
      _.extend(this, singleSelect);
    }
  });

  var initializeDrawers = function(){
    Entities.drawers = new Entities.DrawerCollection([
      { name: "Contacts", url: "contacts", navigationTrigger: "contacts:list" },
      { name: "About", url: "about", navigationTrigger: "about:show" }
    ]);
  };

  var API = {
    getDrawers: function(){
      if(Entities.drawers === undefined){
        initializeDrawers();
      }
      return Entities.drawers;
    }
  };

  CocoManager.reqres.setHandler("drawer:entities", function(){
    return API.getDrawers();
  });
});
