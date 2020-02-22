({ 

navigateToObject: function(component, event, helper) { 

var recordId = component.get("v.recordId"); 

var event = $A.get("e.force:navigateToSObject"); 
alert(recordId);
event.setParams({ 

"recordId": recordId 

}); 

event.fire(); 

} 

})