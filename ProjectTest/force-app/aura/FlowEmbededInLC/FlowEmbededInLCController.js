({
    init : function (component) {
        // Find the component whose aura:id is "flowData"
        var flow = component.find("flowData");
        var inputVariables = [
         { name : "recordId", type : "String", value: '0017F00001B4y1ZQAR' }];
        // In that component, start your flow. Reference the flow's Unique Name.
        flow.startFlow("Test_Flow_1",inputVariables);
    },
    
	handleStatusChange : function (component, event) {
   	if(event.getParam("status") === "FINISHED") {
      var urlEvent = $A.get("e.force:navigateToURL");
		urlEvent.setParams({
		"url": 'https://nikhil6892-dev-ed--c.ap5.visual.force.com/apex/myvfpage'
		});
		urlEvent.fire();
		}
   	}
        

})