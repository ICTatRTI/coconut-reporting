CocoManager.module("DrawerApp.Show", function(Show, CocoManager, Backbone, Marionette, $, _){
   	Show.DrawerView = Marionette.ItemView.extend({
		template: "#drawer-template",
		events: {
			"click a#dashboard": "showDashboard",
		      "click a.report__link": "showReport",
		      "click a.setting__link": "showSetting",
			  "click a.activity__link": "showActivity",
			  "click a.admin__link": "showAdmin",
			"click a.drawer__subtitle": "toggleDropdownMenu"
		},

		showReport: function(e){
			e.preventDefault();
			var reportname = e.currentTarget.id;
			var classStr = $(e.currentTarget).attr('class');
			var linkTitle = "Reports >> "+e.currentTarget.innerText;
			if (classStr.indexOf('drawer__subtitle') == -1) {;
			   this.setActiveLink(e);
			   this.setNewTitle(linkTitle);
			   this.trigger("report:clicked", reportname);
			} else {
				if (reportname == "dashboard"){
					CocoManager.navigate(reportname, true);
					CocoManager.Dashboard.Show.Controller.showDashboard();
				}
			}
		},
		showDashboard: function(e){
			e.preventDefault();
			this.setNewTitle("Dashboard");
			this.removeActive();	
		},
		
		showSetting: function(e){
		  e.preventDefault();
		  var linkTitle = "Settings >> "+e.currentTarget.innerText;
		  this.setActiveLink(e);
		  this.setNewTitle(linkTitle);
		  var setting = e.currentTarget.id;	
		  this.trigger("setting:clicked", setting);
		},
		
		showActivity: function(e){
		  e.preventDefault();
		  var linkTitle = "Activities >> "+e.currentTarget.innerText;
		  this.setActiveLink(e);
		  this.setNewTitle(linkTitle);
		  var activity = e.currentTarget.id;	
		  this.trigger("activity:clicked", activity);
		},
		
		showAdmin: function(e){
		  e.preventDefault();
		  var linkTitle = "Admin >> "+e.currentTarget.innerText;
		  this.setActiveLink(e);
		  this.setNewTitle(linkTitle);
		  var link_id = e.currentTarget.id;	
		  this.trigger("admin:clicked", link_id);
		},
		
		toggleDropdownMenu: function(e){
			e.preventDefault();
			$("div.dropdown").slideUp();
			$target = $(e.target); 
			$target.next("div.dropdown").slideToggle();
		},
		
		removeActive: function(){
			$("a.mdl-navigation__link").removeClass("active");
		},
		
		setActiveLink(e){
		  this.removeActive();
  		  $(e.target).addClass("active");
		},
		
		setNewTitle(title){
			CocoManager.DrawerApp.Show.Controller.updateTitle(title);
		}
		
	  });	
});
