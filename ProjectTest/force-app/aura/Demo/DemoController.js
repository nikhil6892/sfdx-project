({
	handleClick : function(component, event, helper) {
        var workItemListTemp = component.get("v.workItemList");
        var workItemNameListTemp = component.get("v.workItemNameList");
        var Flag;
        console.log(event.getSource().getLocalId()); 
        console.log(event.getSource().get("v.name")); 
        var cmpTarget = component.find(event.getSource().getLocalId());
        $A.util.toggleClass(cmpTarget, 'selectedBtn');
        
        var index = workItemListTemp.indexOf(event.getSource().getLocalId());
        console.log(index);
        if(index == -1){
        	workItemListTemp.push(event.getSource().getLocalId()); 
            workItemNameListTemp.push(event.getSource().get("v.name")); 
            Flag = true;
        }
        if(index>-1){
            workItemListTemp.splice(index, 1);
            workItemNameListTemp.splice(index, 1);
            Flag = false;
        }
        component.set("v.workItemList",workItemListTemp);
        component.set("v.workItemNameList",workItemNameListTemp);
        console.log(component.get("v.workItemList"));
        console.log(component.get("v.workItemNameList"));
        
        var cmpEvent = component.getEvent("refreshWorkTableEvent");
        cmpEvent.setParams({
            "workItemList" : component.get("v.workItemList"),
            "Flag":Flag});
        cmpEvent.fire();
    }
})