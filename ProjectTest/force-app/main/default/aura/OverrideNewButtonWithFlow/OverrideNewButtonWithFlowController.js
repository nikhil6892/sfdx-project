({
    init : function (component) {
    // Find the component whose aura:id is "flowData"
    
        var flow = component.find("flowData");
        // In that component, start your flow. Reference the flow's Unique Name.
        flow.startFlow("Test_Flow_1");
    },
    closeModel : function (component) {
    	component.set("v.isModalOpen", false);
        var urlEvent = $A.get("e.force:navigateToURL");
    	urlEvent.setParams({
      	"url": "/003/o"
    	});
    	urlEvent.fire();
        
	},
    handleStatusChange : function (component,event) {
      if(event.getParam("status") === "FINISHED") {
      var outputVariables = event.getParam("outputVariables");
      var outputVar;
      	for(var i = 0; i < outputVariables.length; i++) {
        	outputVar = outputVariables[i];
         	if(outputVar.name === "recordId") {
            	var urlEvent = $A.get("e.force:navigateToSObject");
            	urlEvent.setParams({
               	"recordId": outputVar.value,
               	"isredirect": "true"
            	});
            	urlEvent.fire();
         	}
        }
   	  }
   }
})