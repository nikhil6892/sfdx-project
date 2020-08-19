({
    doInit: function(component, event, helper) {
        
        var action = component.get("c.getRecordTypeName");
        action.setCallback(this, function(response) {
            var state = response.getState();
            var result = response.getReturnValue();
            
            if (state === "SUCCESS") {
                component.set('v.recordTypeInfo',result);
                //component.set('v.selectedValue',accNameList[0]);
                var arrayMapKeys = [];
        		for (var key in result) {
                    arrayMapKeys.push(key);
        		}
                component.set('v.recordTypeList',arrayMapKeys);
            }
            });
        $A.enqueueAction(action);
    },

    handleChange: function(component, event, helper) {
          
        console.log(component.find("mySelect1").get("v.value"));
        var result = component.get("v.recordTypeInfo"); 
        //console.log('RecordTypeID: '+result[component.find("mySelect1").get("v.value")]);
        component.set('v.recordTypeId',result[component.find("mySelect1").get("v.value")]);
        /*var arrayMapKeys = [];
        for (var key in result) {
                    arrayMapKeys.push(key);
                    console.log('hello12'+result[key]);
                    var dbh = result[key];
                    console.log('hello12'+JSON.stringify(dbh));
        }*/
    },
    next : function(component, event, helper) {
        
        

    //Find the text value of the component with aura:id set to "address"
    /*
     *var urlEvent = $A.get("e.force:navigateToURL");
    urlEvent.setParams({
        "url": "https://www.gmail.com"
    });
    urlEvent.fire();
     */
    	console.log(component.get('v.recordTypeId'));
        var createRecordEvent = $A.get("e.force:createRecord");
    	createRecordEvent.setParams({
        	"entityApiName": "Contact",
        	"recordTypeId": component.get('v.recordTypeId')
    	});
    	createRecordEvent.fire();
    }
    
})