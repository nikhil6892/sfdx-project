({
	concatenateValue : function(component, event, helper) {
		var totalVal = component.get("v.totalValue");
        totalVal = totalVal + 1;
        component.set("v.resulttotalValue",totalVal);
        console.log(component.get("v.resulttotalValue"));
	}
})