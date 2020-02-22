({
    getAccounts : function(cmp) {
      var action = cmp.get("c.getAccounts");
      action.setCallback(this, function(response){
        var state = response.getState();
        if (state === "SUCCESS") {
          cmp.set("v.accounts", response.getReturnValue());
        }
      });
      $A.enqueueAction(action);
    },
    getContacts : function(cmp) {
      var action = cmp.get("c.getContacts");
      action.setCallback(this, function(response){
        var state = response.getState();
        if (state === "SUCCESS") {
          cmp.set("v.contacts", response.getReturnValue());
        }
      });
      $A.enqueueAction(action);
    },
    getLeads : function(cmp) {
      var action = cmp.get("c.getLeads");
      action.setCallback(this, function(response){
        var state = response.getState();
        if (state === "SUCCESS") {
          cmp.set("v.leads", response.getReturnValue());
        }
      });
      $A.enqueueAction(action);
    },
  })