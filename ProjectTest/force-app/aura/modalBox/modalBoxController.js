({
    doInit : function(component, event, helper) {
    
    var urlEvent = $A.get("e.force:navigateToURL");
    urlEvent.setParams({
      "url": "/006/o"
    });
    urlEvent.fire();
	},
	onGroup : function(component, event, helper) {
		var selected = event.getSource().get("v.id");
        component.set("v.selection",selected);
        alert(selected);
	},
    handleComponentEvent : function(cmp, event) {
        var message = event.getParam("searchResult");
        // set the handler attributes based on event data
        cmp.set("v.isOpen1", true);
        cmp.set("v.searchResultList", message);    
        
    },
    openModel: function(component, event, helper) {
      // for Display Model,set the "isOpen" attribute to "true"
      component.set("v.isOpen1", true);
   },
 
   closeModel: function(component, event, helper) {
      // for Hide/Close Model,set the "isOpen" attribute to "Fasle"  
      component.set("v.isOpen1", false);
      var urlEvent = $A.get("e.force:navigateToURL");
    urlEvent.setParams({
      "url": "/006/o"
    });
    urlEvent.fire();
	
       
      
       
   },
    handleRadiobtnClick: function(component, event, helper) {
        var selected = event.getSource().get("v.id");
        var serachList = component.get("v.searchResultList");
        component.set("v.selection",selected);        
        //alert(serachList[selected].postcode);        
    },
    done:function(component, event, helper) {        
                
        component.set("v.isOpen1", false);
        var serachList = component.get("v.searchResultList");
        //var compEvents = component.getEvent("cmpEventResponse");
        var selected = component.get("v.selection");
        var childComponent = component.find('child');
        //compEvents.setParams({ "postcode" : serachList[selected].postcode });
        //compEvents.setParams({ "building_number" : serachList[selected].building_number });
        //compEvents.setParams({ "dependant_locality" : serachList[selected].dependant_locality });
        //compEvents.setParams({ "line_1" : serachList[selected].line_1 });
        //compEvents.setParams({ "county" : serachList[selected].county });
        childComponent.myMethod(serachList[selected].postcode, serachList[selected].building_number,serachList[selected].dependant_locality,serachList[selected].line_1,serachList[selected].county);
        //compEvents.fire();
        
    }
    
})