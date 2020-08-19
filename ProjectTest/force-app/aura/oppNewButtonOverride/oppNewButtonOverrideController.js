({
    doInit : function(component, event, helper) {
        alert(component.get("v.recordId"));
        
    },
    handleOpenModal: function(component, event, helper) {
        //For Display Modal, Set the "openModal" attribute to "true"
        component.set("v.openModal", true);
    },
     
    handleCloseModal: function(component, event, helper) {
        //For Close Modal, Set the "openModal" attribute to "fasle"  
        component.set("v.openModal", false);
        component.set("v.isOpen1", false);
        alert(component.get("v.recordId"));
      	var urlEvent = $A.get("e.force:navigateToURL");
    	urlEvent.setParams({
      	"url": "/006/o"
    	});
    	urlEvent.fire();
    	}

})