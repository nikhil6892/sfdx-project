({ 
/*navigate : function(component, event, helper) { 
var navEvt = $A.get("e.force:navigateToSObject"); 
navEvt.setParams({ 
"recordId": component.get("v.recordId"), 
"slideDevName": "detail" 
}); 
navEvt.fire(); 
}*/
    
    selectUpdateCaseAction : function( cmp, event, helper) {
        
    var createRecordEvent = $A.get("e.force:editRecord");
    createRecordEvent.setParams({
        "recordId": "0067F00000PNeVCQA1"
    });
    createRecordEvent.fire();

    },

    updateCaseStatusAction : function( cmp, event, helper ) {
        /*var actionAPI = cmp.find("quickActionAPI");
        var fields = {Status: {value: "Closed"}, Subject: {value: "Sets by lightning:quickActionAPI component"}, accountName: {Id: accountId}};
        var args = {actionName: "OpportunityContactRole.EditContactRoles", entityName: "Case", targetFields: fields};
        actionAPI.setActionFieldValues(args).then(function(){
            actionAPI.invokeAction(args);
        }).catch(function(e){
            console.error(e.errors);
        });*/
    }
})