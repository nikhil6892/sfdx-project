({
	handleLoad : function(component, event, helper) {
		component.set("v.showSpinner",false);
        
	},
    handleSubmit : function(component, event, helper) {
         

	},
    handleSuccess : function(component, event, helper) {
		
	},
    handleError: function(component, event) { 
		var errors = event.getParams(); 
        var newErrorlst =[];
        console.log("Error Response", JSON.stringify(errors.error.body.output.errors));
		//console.log("Error Response", JSON.stringify(errors.error.body.output.errors[1].message)); 
		console.log("Length"+errors.error.body.output.errors.length);
        var length = errors.error.body.output.errors.length;
        var i=0;
        while (i<length){
            console.log("Error Response", JSON.stringify(errors.error.body.output.errors[i].message)); 
            newErrorlst.push(JSON.stringify(errors.error.body.output.errors[i].message).replace(/^"(.*)"$/, '$1'));
            //console.log(JSON.stringify(errors.error.body.output.errors[i].message).replace(/^"(.*)"$/, '$1'));
            i++;
        }
        console.log("List"+newErrorlst);
        component.set("v.ErrorMessage",newErrorlst);
        console.log
        component.set("v.showError",true);
        
        // top level error messages
       
	}

})