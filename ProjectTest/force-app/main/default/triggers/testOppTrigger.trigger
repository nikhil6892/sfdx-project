trigger testOppTrigger on Opportunity (before insert,before update,after update,after insert) {
    /*List<OpportunityTeamMember> oppTeamList = new List<OpportunityTeamMember>();
    if(Trigger.isAfter && Trigger.isUpdate){
        OpportunityTriggerHandler.createRelatedRecord(Trigger.new,Trigger.oldMap);
        List<invoices__x> invList = [Select Id__c from invoices__x];
    }
    
    if(Trigger.isBefore && Trigger.isInsert){
        //OpportunityTriggerHandler.createRelatedRecord(Trigger.new,Trigger.oldMap);
        for(Opportunity opp: Trigger.new){
            System.debug('Related Account'+opp.Account);
            System.debug('Related AccountId'+ opp.Account.AccountNumber);
        }
    }
        if(Trigger.isAfter && Trigger.isInsert){
        //OpportunityTriggerHandler.createRelatedRecord(Trigger.new,Trigger.oldMap);
        for(Opportunity opp: Trigger.new){
            System.debug('Related Account'+opp.Account);
            System.debug('Related AccountId'+ opp.Account.AccountNumber);
        }
    }
    /*if(Trigger.isBefore)
        System.debug('Before Insert');
    if( Trigger.isInsert) 
    {
        if(Trigger.isBefore && (RecursionControl.isFirstRun() || Test.isRunningTest()))
        {
              system.debug('*** isbefore insert' + trigger.New);
            AccountController acct = new AccountController ();
            List<Account> accList = acct.getAccounts();
            //PassengerTriggerHandler.OnBeforeInsert(trigger.New, Trigger.NewMap);
        }
       
    }*/
    
        
}