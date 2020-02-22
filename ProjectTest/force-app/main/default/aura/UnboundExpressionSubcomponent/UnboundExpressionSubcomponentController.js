({    
    handleButtonClick : function(component, event, helper) {
    var myattr2 = component.get("v.attr2");
        component.set("v.attr2", "Button clicked in subcomponent!");
    }
})