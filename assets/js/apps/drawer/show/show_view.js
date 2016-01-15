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
			var linkTitle = "Reports: ";
			if (classStr.indexOf('drawer__subtitle') == -1) {;
			   this.setActiveLink(e);
			   this.setNewTitle(linkTitle, e.currentTarget.innerText);
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
		  var linkTitle = "Settings: ";
		  this.setActiveLink(e);
		  this.setNewTitle(linkTitle, e.currentTarget.innerText);
		  var setting = e.currentTarget.id;	
		  this.trigger("setting:clicked", setting);
		},
		
		showActivity: function(e){
		  e.preventDefault();
		  var linkTitle = "Activities: ";
		  this.setActiveLink(e);
		  this.setNewTitle(linkTitle, e.currentTarget.innerText);
		  var activity = e.currentTarget.id;	
		  this.trigger("activity:clicked", activity);
		},
		
		showAdmin: function(e){
		  e.preventDefault();
		  var linkTitle = "Admin: ";
		  this.setActiveLink(e);
		  this.setNewTitle(linkTitle, e.currentTarget.innerText);
		  var link_id = e.currentTarget.id;	
		  this.trigger("admin:clicked", link_id);
		},
		
		toggleDropdownMenu: function(e){
			e.preventDefault();
			$target = $(e.target);
			var hidden = $target.next("div.dropdown").is(":hidden");
			$("div.dropdown").slideUp();
			console.log(hidden);
			if (!hidden) {
  			   $target.next("div.dropdown").slideUp();
			} else  {
				 $target.next("div.dropdown").slideToggle();
			} 
		},
		
		removeActive: function(){
			$("a.mdl-navigation__link").removeClass("active");
		},
		
		setActiveLink(e){
		  this.removeActive();
  		  $(e.target).addClass("active");
		},
		
		setNewTitle(title, subtitle){
			CocoManager.DrawerApp.Show.Controller.updateTitle(title, subtitle);
		}
		
	  });	
});
