({
    doInit : function(component, event, helper) {
        console.log(component.get("v.inputText"));
    }
	/*handleOnChange : function(component, event, helper) {
        /*var fieldname = component.get("v.lookupField");
        if(fieldname ==="Manager__c")
			component.set( "v.selectedManagerId", event.getParams( "fields" ).value );	
        else if (fieldname ==="Senior_Manager__c")
           component.set( "v.selectedSeniorManagerId", event.getParams( "fields" ).value ); 
        else
            component.set( "v.selectedGeneralManagerId", event.getParams( "fields" ).value ); */
       /* var value = event.getParams( "fields" ).value;
        console.log(value);
	},
    doAction : function(component, event) {
        var inputCmp = component.find("lookupField");
        var value = inputCmp.get("v.value");

        console.log(value);
        if (value == null) {
            //inputCmp.set("v.errors", [{message:"Input cannot be blank"}]);
        } else {
            inputCmp.set("v.errors", null);
        }
    }*/
})