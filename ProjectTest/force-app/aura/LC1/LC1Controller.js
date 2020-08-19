({
    doInit : function(component, event, helper) {
        
        var actionOne = component.get("c.getDuplicateError");
        actionOne.setCallback(this, function(response){
            var state = response.getState();
            //console.log(JSON.parse(response.getReturnValue()));
            console.log("Hii"+response.getReturnValue());
            if(state === "SUCCESS"){
            	            }else{
                console.log(actionOne.getError());
            }
        });
        $A.enqueueAction(actionOne);  
        
        
        
    
    }
})