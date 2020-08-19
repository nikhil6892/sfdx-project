({
 itemsChange : function(component, event, helper) {           
        var appEvent = $A.get("e.selfService:caseCreateFieldChange");
     	console.log(event.getSource().get("v.fieldName"));
     	console.log(event.getSource().get("v.value"));
        appEvent.setParams({
            "modifiedField": event.getSource().get("v.fieldName"),
            "modifiedFieldValue": event.getSource().get("v.value")
        });

     appEvent.fire();
 }
})