CocoManager.module("DrawerApp.Show", function(Show, CocoManager, Backbone, Marionette, $, _){
   	Show.DrawerView = Marionette.ItemView.extend({
		template: "#drawer-template",
		events: {
		      "click a.report__link": "showReport",
		      "click a.setting__link": "showSetting",
			"click a.drawer__subtitle": "toggleMenu"
		},

		showReport: function(e){
			e.preventDefault();
			var reportname = e.currentTarget.id;
			var classStr = $(e.currentTarget).attr('class');
			if (classStr.indexOf('drawer__subtitle') == -1) {;
			   this.trigger("report:clicked", reportname);
			} else {
				if (reportname == "dashboard"){
					Backbone.history.navigate(reportname, true);
					CocoManager.Dashboard.Show.Controller.showDashboard();
				}
			}
		},
		
		showSetting: function(e){
		  e.preventDefault();
		  var setting = e.currentTarget.id;	
		  this.trigger("setting:clicked", setting);
		},
		
		toggleMenu: function(e){
			e.preventDefault();
			$target = $(e.target); 
			$target.next("div.dropdown").slideToggle();
		}
		
	  });	
});
