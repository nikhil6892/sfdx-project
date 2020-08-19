({
	doInit : function(component, event, helper) {
		var action = component.get("c.getAccountMap");
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state === "SUCCESS")
                var response = response.getReturnValue();
            	var optionsList = [];
				for (var key in response) {
    			if (response.hasOwnProperty(key)) {
        			optionsList.push({value: key, label: response[key]});
    			}
				};
				component.set('v.accountMap', response);
            	component.set('v.accountMapList', optionsList);
        });
        $A.enqueueAction(action);
	},
    
    handleOnChange : function(component, event, helper) {
        var key = event.getParams( "fields" ).value;
        //console.log(component.get('v.accountMap')[key]);
        var accMap = component.get('v.accountMap');
        console.log(event.getParams( "fields" ).value+"--> "+accMap[key]);
    }
})