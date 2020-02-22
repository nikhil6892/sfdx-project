({
    sendToVF : function(component, event, helper) {
        var message = component.get("v.message");
        var vfOrigin = "https://" + component.get("v.vfHost");
        var vfWindow = component.find("vfFrame").getElement().contentWindow;
        vfWindow.postMessage(message, vfOrigin);
    }
})