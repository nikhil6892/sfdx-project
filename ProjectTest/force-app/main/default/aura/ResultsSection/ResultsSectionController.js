({
    doInit : function(component, event, helper) {
      helper.getAccounts(component);
      helper.getContacts(component);
      helper.getLeads(component);
    }
  })