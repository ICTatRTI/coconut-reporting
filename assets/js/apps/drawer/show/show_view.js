CocoManager.module("DrawerApp.Show", function(Show, CocoManager, Backbone, Marionette, $, _){
   	Show.DrawerView = Marionette.ItemView.extend({
		template: "#drawer-template",
		events: {
		      "click a": "navigate"
		},

		navigate: function(e){
			e.preventDefault();;
			var reportname = e.currentTarget.id;
			var classStr = $(e.currentTarget).attr('class');
			if (classStr.indexOf('report__subtitle') == -1) {;
			   this.trigger("report:clicked", reportname);
			} else {
				if (reportname == "dashboard"){
					Backbone.history.navigate(reportname, true);
					CocoManager.Dashboard.Show.Controller.showDashboard();
				}
			}
		}
	  });	
});
