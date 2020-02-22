({
    
    handleSaveRecord: function(component, event, helper) {
        component.find("recordEditor").saveRecord($A.getCallback(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                console.log("Save completed successfully.");
            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving record, error: ' + 
                           JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        }));},
    handleRecordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        console.log('***EVENT PARAMS***: ');
        console.log(JSON.stringify(eventParams));
        if(eventParams.changeType === "LOADED") {
            console.log('LOADED');
            console.log(component.get("v.simpleRecord"));
            component.set('v.isLoading',false);
        } else if(eventParams.changeType === "ERROR") {
            console.log('Error loading record');
            console.log('Error: ' + component.get("v.error"));

        }
    }
})