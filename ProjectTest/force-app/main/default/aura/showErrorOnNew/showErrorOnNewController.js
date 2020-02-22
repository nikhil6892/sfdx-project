({
	doInit : function(component, event, helper) {
		var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "title": "Error!",
        "type": "error",
        "message": "Not Allowed."
    });
    toastEvent.fire();
        
    var urlEvent = $A.get("e.force:navigateToURL");
    urlEvent.setParams({
      "url": "/006/o"
    });
    urlEvent.fire();
	}
    
    
})