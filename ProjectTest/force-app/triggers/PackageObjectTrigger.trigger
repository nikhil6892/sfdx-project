trigger PackageObjectTrigger on test1234567789__Manage_Package_Object__c (before insert, before update, after insert,after update) {
    
    if(Trigger.isBefore && Trigger.isInsert)
        system.debug('Before Insert Trigger'+trigger.new);
    if(Trigger.isAfter && Trigger.isInsert)
        system.debug('After Insert Trigger'+trigger.new); 
    if(Trigger.isBefore && Trigger.isUpdate)
        system.debug('Before Update Trigger'+trigger.new);
    if(Trigger.isAfter && Trigger.isUpdate){
        system.debug('After Update Trigger'+trigger.new); 
        TriggerHelperClass.insertRec();
    }
    
    
}