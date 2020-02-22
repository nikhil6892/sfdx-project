({    invoke : function(component, event, helper) {
   // Get the record ID attribute
   var record = component.get("v.recordId");
   console.log("Here");
    var homeEvent = $A.get("e.force:navigateToObjectHome");
    homeEvent.setParams({
        "scope": "Test_Custom_Object__c"
    });
    homeEvent.fire();
},
  
  doInit : function(component, event, helper) {
   // Get the record ID attribute
   var record = component.get("v.recordId");
   console.log("Here");
    var homeEvent = $A.get("e.force:navigateToObjectHome");
    homeEvent.setParams({
        "scope": "Test_Custom_Object__c"
    });
    homeEvent.fire();
}
 
 
})