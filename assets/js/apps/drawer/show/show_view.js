CocoManager.module("DrawerApp.Show", function(Show, CocoManager, Backbone, Marionette, $, _){
   	Show.DrawerView = Marionette.ItemView.extend({
		template: "#drawer-template",
		events: {
		      "click a.report__link": "showReport",
		      "click a.setting__link": "showSetting",
			  "click a.activity__link": "showActivity",
			"click a.drawer__subtitle": "toggleDropdownMenu"
		},

		showReport: function(e){
			e.preventDefault();
			var reportname = e.currentTarget.id;
			var classStr = $(e.currentTarget).attr('class');
			if (classStr.indexOf('drawer__subtitle') == -1) {;
			   this.setActiveLink(e);
			   this.trigger("report:clicked", reportname);
			} else {
				if (reportname == "dashboard"){
					CocoManager.navigate(reportname, true);
					CocoManager.Dashboard.Show.Controller.showDashboard();
				}
			}
		},
		
		showSetting: function(e){
		  e.preventDefault();
		  this.setActiveLink(e);
		  var setting = e.currentTarget.id;	
		  this.trigger("setting:clicked", setting);
		},
		
		showActivity: function(e){
		  e.preventDefault();
		  this.setActiveLink(e);
		  var activity = e.currentTarget.id;	
		  this.trigger("activity:clicked", activity);
		},
		
		toggleDropdownMenu: function(e){
			e.preventDefault();
			$target = $(e.target); 
			$target.next("div.dropdown").slideToggle();
		},
		
		setActiveLink(e){
  		  $("a.mdl-navigation__link").removeClass("active");
  		  $(e.target).addClass("active");
		}
		
	  });	
});
