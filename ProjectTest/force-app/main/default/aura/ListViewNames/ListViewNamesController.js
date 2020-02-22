({
	doInit : function(component, event, helper) {
		var action = component.get('c.getListView');
      action.setCallback(this, function(response){
         //store state of response
         var state = response.getState();
         if (state === "SUCCESS") {
            //set response value in ListOfContact attribute on component.         
            component.set('v.ListViewNames', response.getReturnValue());
         }
      });
      $A.enqueueAction(action);
	}
})