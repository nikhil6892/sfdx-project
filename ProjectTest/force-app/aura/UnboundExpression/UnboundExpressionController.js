({
    doInit : function(component, event, helper) {
    component.set("v.attr1", "Attribute initialized in parent component!");
    },
    
    handleButtonClick : function(component, event, helper) {
    var myattr1 = component.get("v.attr1");
        component.set("v.attr1", "Button clicked in parent component!");
    }
})