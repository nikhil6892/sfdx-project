({
    doInit : function(component, event, helper) {        
        component.set('v.columns', [
            {label: 'Sr. No.', type: 'text', sortable: true},
            {label: 'Work Name', type: 'text', sortable: true}
            ]);        
    },
    handleComponentEvent : function(cmp, event) {
        var message = event.getParam("workItemList");
        var Flag = event.getParam("Flag");
        var numEventsHandled;
		console.log("Child"+message);
        // set the handler attributes based on event data
        cmp.set("v.workItemListFromEvent", message);
        if(Flag)
        	numEventsHandled = parseInt(cmp.get("v.numEvents")) + 1;
        else
            numEventsHandled = parseInt(cmp.get("v.numEvents")) - 1;
        cmp.set("v.numEvents", numEventsHandled);
    },
    handleClick : function(cmp, event) {
        console.log(event.getSource().get("v.name"));
    }
})