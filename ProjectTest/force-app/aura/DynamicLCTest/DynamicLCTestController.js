/*createComponentController.js*/
({
    doInit : function(component,helper) {
        alert(component.get("v.recordId"));
        var editRecordEvent = $A.get("e.force:editRecord");
        editRecordEvent.setParams({
            "recordId": component.get("v.recordId")
        });
        editRecordEvent.fire();
    }
    
})