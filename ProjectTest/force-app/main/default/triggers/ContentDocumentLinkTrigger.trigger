// trigger ContentDocumentLinkTrigger on ContentDocumentLink (after insert,before insert,before delete) { 
trigger ContentDocumentLinkTrigger on ContentDocumentLink (before delete) {
    /*if(CheckRecursion.isFirstTime)
    {
        CheckRecursion.isFirstTime = false;
    if(trigger.isBefore) {
        if(trigger.isInsert) {
            ContentDocumentLinkTriggerHandler.onAfterInsert(trigger.new);
        }
    }
        
    }
    if(trigger.isBefore) {
        if(trigger.isInsert) {
            
    for(ContentDocumentLink l : Trigger.new) {
        System.debug('In Before Insert ContentDocumentLinkEntityID'+l.LinkedEntityId);
        l.Visibility = 'AllUsers'; 
    }
        }
    }
    if(trigger.isAfter) {
        if(trigger.isInsert) {
            System.debug('In After Insert ContentDocumentLinkEntityID'+Trigger.new[0].LinkedEntityId);
            System.debug('In After Insert ContentDocumentLinkEntityID'+Trigger.new[1].LinkedEntityId);
            System.debug('In After Insert ContentDocumentLinkEntityID'+Trigger.new[2].LinkedEntityId);

        }
    }*/
    
    if(trigger.isbefore) {
        if(trigger.isDelete) {
            for(ContentDocumentLink cdl:Trigger.old){
                System.debug('Deleted ContentDocumentLinkID'+cdl.Id+' LinkedEntityId:'+cdl.LinkedEntityId);
            }
        }
    }
}