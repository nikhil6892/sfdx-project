trigger ContactTrigger on Contact (after update,after insert,before update) {
    if(CheckRecursion.isFirstTime)
    {
        CheckRecursion.isFirstTime = false;
    	if(Trigger.isAfter && Trigger.isInsert){
        	Contact con = new Contact();
        	con.LastName = 'Test Default Record Type';
        	insert con;
    	}
    }
    /*public static Integer counterBeforeTrigger = 0;
    public static Integer counterAfterTrigger = 0;
    
    if(Trigger.isBefore){
        if(Trigger.isUpdate){
            System.debug('Before Update Trigger Fire :'+counterBeforeTrigger++);
            System.debug('Before Update Trigger Fire Apex:'+RefireTestController.counterBeforeApex++);
            RefireTestController rtc = new RefireTestController();
            RefireTestController.testFlagSet(Trigger.new, Trigger.oldMap);
        }
    }
    if(Trigger.isAfter){
        if(Trigger.isUpdate){
            System.debug('After Update Trigger Fire :'+counterAfterTrigger++);
            System.debug('After Update Trigger Fire Apex:'+RefireTestController.counterAfterApex++);
        }
    }*/
}