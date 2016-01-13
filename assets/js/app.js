var CocoManager = new Marionette.Application();

CocoManager.addRegions({
  headerRegion: "#header-region",
  mainRegion: "#main-region",
  drawerRegion: "#drawer-region",	
  dialog: "#dialog-region"
});

CocoManager.navigate = function(route,  options){
  options || (options = {});
  Backbone.history.navigate(route, options);
};

CocoManager.getCurrentRoute = function(){
  return Backbone.history.fragment
};

CocoManager.on("before:start", function(){
  var DashLayoutView = Marionette.LayoutView.extend({ 
    template: "#dashboard-template",

    regions: {
      dashHeaderRegion: "#dbheader-region",
      dashMainRegion: "#dbmain-region",
    }
  });
  
CocoManager.dashboard = new DashLayoutView();
CocoManager.mainRegion.show(CocoManager.dashboard);

CocoManager.dialog.onShow = function(view){
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

CocoManager.HeaderView = Marionette.ItemView.extend({
	template: "#header-template"
});
/*
CocoManager.MainView = Marionette.ItemView.extend({
	className: "page-content",
	template: "#main-template"
});

CocoManager.ReportView = Marionette.ItemView.extend({
	className: "report-content",
	template: "#report-template",
});  
    
CocoManager.DrawerView = Marionette.ItemView.extend({
	template: "#drawer-template"
});
*/

CocoManager.config = {
	templates: "assets/templates/"
    };
		
CocoManager.on("start", function(){
    if(Backbone.history){
      Backbone.history.start();  
	}
});
