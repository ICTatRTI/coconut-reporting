CocoManager.module("ActivityApp.Show", function(Show, CocoManager, Backbone, Marionette, $, _){

  Show.ActivityView = Marionette.ItemView.extend({
	className: "activity-content",
	template: "#activity-template",
	  events: {
	  	"click input#check-all": "selectAllCheckbox"
	  },
	  selectAllCheckbox: function(e){
 		 if ($(e.currentTarget).prop('checked')){
 		 	$("input.phone-number").prop('checked', true);
 		 } else {
 		    $("input.phone-number").prop('checked', false);
 	     }
	  }
  });

  Show.ActivityOptionsView = Marionette.ItemView.extend({
	  className: "report-header",  
	template: "#activity-options-template"
  });

});