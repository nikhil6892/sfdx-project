({
    lwcEventHandler : function(component, event, helper) {
        var eventData = event.getParam('contactId');
        //var eventDataList = eventData.split('-');
        component.set("v.textFromEvent",eventData);
    }
})