trigger BotTrigger on LiveChatTranscript (before insert,before update,after update) {
    
    if(Trigger.isInsert && Trigger.isBefore){
        System.debug('Id'+Trigger.new[0].Id);
    }
    if(Trigger.isUpdate && Trigger.isBefore){
        System.debug('Before Update Id'+Trigger.new[0].Id);
        System.debug('Before Update Status'+Trigger.new[0].status);
        if(Trigger.new[0].status == 'Completed'){
           Trigger.new[0].AccountId = '0017F00001B4y1ZQAR';
        }
        
    }
    if(Trigger.isUpdate && Trigger.isAfter){
        System.debug('After Update Id'+Trigger.new[0].Id);
        System.debug('After Update Status'+Trigger.new[0].status);
        System.debug('After Update Status'+Trigger.new[0].AccountId);
    }
}