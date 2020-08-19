({
	doinit : function(component, event, helper) {
		var accNameList = component.get('v.accountList');
        //alert(component.get('v.account'));
        var action = component.get("c.getAccounts");
        action.setParams({ accList : component.get('v.accountList') });
        action.setCallback(this, function(response) {
            var state = response.getState();
            var accNameList = response.getReturnValue();
            if (state === "SUCCESS") {
                component.set('v.accountList',response.getReturnValue());
                //component.set('v.selectedValue',accNameList[0]);
            }
            });
        $A.enqueueAction(action);


	},
    handleChange : function(component, event, helper) {
        //alert(component.find("mySelect1").get("v.value"));
        component.set('v.selectedValue',component.find("mySelect1").get("v.value"));
    }
})