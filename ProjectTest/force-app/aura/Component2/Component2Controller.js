({
    navigateToComOne : function(component, event, helper) {
        var evt = $A.get("e.force:navigateToComponent");
        evt.setParams({
            componentDef : "c:Component1",
            componentAttributes: {    
            }
        });
        evt.fire();
 }
})