CocoManager.module("DrawerApp.Show", function(Show, CocoManager, Backbone, Marionette, $, _){
   	Show.DrawerView = Marionette.ItemView.extend({
		template: "#drawer-template",
		events: {
		      "click a": "navigate"
		},

		navigate: function(e){
			e.preventDefault();
			var classStr = $(e.currentTarget).attr('class');
			if (classStr.indexOf('report__subtitle') == -1) {
			   Backbone.history.navigate("reports/"+e.currentTarget.id, true);
			   //this.trigger("navigate", this.id);
			} 
		},
	  });	
});
