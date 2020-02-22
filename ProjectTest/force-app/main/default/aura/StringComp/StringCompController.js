({
	echo : function(component, event, helper) {
		var action = component.get("c.returnString");
        var myString = component.get("v.InputStr");
        action.setParams({
            "test": myString
        });
        action.setCallback(this,function(reponse){
            var state = reponse.getState();
            if (state === "SUCCESS") {
                component.set("v.InputStr",reponse.getReturnValue());
            }
            
        });
        $A.enqueueAction(action);
        this.navigate(component,event,helper);
	},
    navigate : function(component, event, helper) {
        alert("Hii");
    }
	
})