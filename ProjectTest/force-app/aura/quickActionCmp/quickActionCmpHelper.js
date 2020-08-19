({
	createRecord : function(component) {
		var accName = component.get("v.accountName");
        var accNumber = component.get("v.accountNumber");
        var createAcountEvent = $A.get("e.force:createRecord");
		createAcountEvent.setParams({
    		"entityApiName": "Account",
    		"defaultFieldValues": {
        	'Name' : 'Test 1',
            'AccountNumber' : '1234',
            'Industry' : 'Agriculture',
        	'RecordTypeId' : '0127F000000EIUyQAO',
            }
       });
		createAcountEvent.fire();
	},
    
    dismissPannel : function(component) {
		var dismissActionPanel = $A.get("e.force:closeQuickAction");
        dismissActionPanel.fire();
	}
})