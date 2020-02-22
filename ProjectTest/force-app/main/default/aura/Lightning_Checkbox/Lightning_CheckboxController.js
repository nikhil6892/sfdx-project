({
	handleSelectAllContact : function(component, event, helper) {
        var value = component.find("selectAll1").get("v.value");       
        if(value){
		component.set("v.Select2",true);
        component.set("v.Select3",true);
        }
        else{
            component.set("v.Select2",false);
        	component.set("v.Select3",false);
        }
            
	},
    openModel: function(component, event, helper) {
      // for Display Model,set the "isOpen" attribute to "true"
      component.set("v.isOpen", true);
   },
 
   closeModel: function(component, event, helper) {
      // for Hide/Close Model,set the "isOpen" attribute to "Fasle"  
       component.set("v.isOpen", false);
       component.set("v.isOpen1", false);
        var recId = component.get("v.recordId");
       component.set("v.isOpen1", false);
       alert(recId);
       console.log("recId"+recId);
       //window.open('/'+recId);
   },
    
      
   showSpinner: function(component, event, helper) {
       // make Spinner attribute true for display loading spinner 
        component.set("v.Spinner", true); 
   },
    
 // this function automatic call by aura:doneWaiting event 
    hideSpinner : function(component,event,helper){
     // make Spinner attribute to false for hide loading spinner    
       component.set("v.Spinner", false);
    },
    
    executeMyMethod : function (component, event, helper) {
        var params = event.getParam('arguments');
        component.set("v.isOpen",true);
        component.set("v.postcode",params.param1);
        component.set("v.building_number",params.param2);
        component.set("v.dependant_locality",params.param3);
        component.set("v.line_1",params.param4);
        component.set("v.county",params.param5);
        //alert(params.param1+" "+params.param2);
    },
    navigate : function(component, event, helper) {

//Find the text value of the component with aura:id set to “address”
//var address = component.find("address").get("v.value");
alert("Hii");
 window.location.assign("/001/0");

},
            
    handleClick : function(component, event, helper) {    	
        /*var value1 = component.find("inputpostcode").get("v.value");
        //alert("Hello"+value);
        //
        var compEvents = component.getEvent("cmpEvent");
        
        
        var action = component.get("c.makeAPICall");
        //action.setParams({postcode:value1});
             
        
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                alert("SUCCESS");
                var result = response.getReturnValue();    
                
                component.set('v.searchResultList',result);
                
                    component.set("v.isOpen", false);
                	component.set("v.isOpen1", true);
                	compEvents.setParams({ "searchResult" : result });
        			compEvents.fire();
            }
            else if(state === "ERROR"){
                alert("Falied");
            }
        });
        $A.enqueueAction(action); */
        var evt = $A.get("e.force:navigateToComponent");
        evt.setParams({
            componentDef: "c:Component1",
            
        });
       
    evt.fire();
        
	}        
})