({
    
	handleSave : function(component, event, helper) {
		var newCase = component.get('v.newCase');
        var conDocId=component.get("v.contDocId");
        var action = component.get("c.saveCase");
	    action.setParams({ 
	        "caseId": newCase,
            "contentDocId": conDocId
	    });
	    action.setCallback(this, function(response){
         //store state of response
         var state = response.getState();
         if (state === "SUCCESS") {
            //set response value in ListOfContact attribute on component.
            component.set('v.caseId', response.getReturnValue());
            var toastEvent = $A.get("e.force:showToast");
    		toastEvent.setParams({
        	"title": "Success!",
            "type": "success",
        	"message": "The record has been created successfully."
    		});
    		toastEvent.fire();
             $A.get("e.force:closeQuickAction").fire();
         }
      });
      $A.enqueueAction(action);

	},
    
    handleUploadFinished : function(component, event, helper) {
    	var uploadedFiles = event.getParam("files");
        var documentId = uploadedFiles[0].documentId;
        var fileName = uploadedFiles[0].name;
        component.set("v.contDocId",documentId);
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "type": "success",
            "message": "File "+fileName+" Uploaded successfully."
        });
        toastEvent.fire();
        
	}
        
})