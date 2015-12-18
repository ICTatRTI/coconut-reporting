var CocoManager = new Marionette.Application();

CocoManager.navigate = function(route,  options){
  options || (options = {});
  Backbone.history.navigate(route, options);
};

CocoManager.getCurrentRoute = function(){
  return Backbone.history.fragment
};

CocoManager.on("before:start", function(){
  var RegionContainer = Marionette.LayoutView.extend({
    el: "#app-container",

    regions: {
      header: "#header-region",
      main: "#main-region",
      dialog: "#dialog-region"
    }
  });

  CocoManager.regions = new RegionContainer();
  CocoManager.regions.dialog.onShow = function(view){
    var self = this;
    var closeDialog = function(){
      self.stopListening();
      self.empty();
      self.$el.dialog("destroy");
    };

    this.listenTo(view, "dialog:close", closeDialog);

    this.$el.dialog({
      modal: true,
      title: view.title,
      width: "auto",
      close: function(e, ui){
        closeDialog();
      }
    });
  };
});

CocoManager.on("start", function(){
  if(Backbone.history){
    Backbone.history.start();
/*
    if(this.getCurrentRoute() === ""){
      CocoManager.trigger("contacts:list");
    }
*/
  }
});