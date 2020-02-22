trigger TaskTrigger on Task (before insert,after insert) {
	
    if(Trigger.isBefore){
        System.debug('Before'+Trigger.new[0].whoId);
    }
    if(Trigger.isAfter){
        System.debug('After'+Trigger.new[0].whoId);
    }
}