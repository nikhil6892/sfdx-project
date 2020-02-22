trigger HelloWorldTrigger on Account (before insert,before update,After update,After insert) {
    
    if(Trigger.isInsert && Trigger.isAfter){
    for(Account acc: Trigger.new){
        Contact con = new Contact();
        con.LastName = acc.Name;
        insert con;
        system.debug(''+con.id);
    }
    }
    /*if((Trigger.isInsert || Trigger.isUpdate) && Trigger.isBefore){
        for(Account acc: Trigger.new){
            acc.DateTimeField__c = DateTime.now() ;
            System.debug('DateTime 01'+acc.DateTimeField__c);
            acc.SLAExpirationDate__c = Date.valueOf(acc.DateTimeField__c);
            System.debug('SLAExpirationDate 01'+acc.SLAExpirationDate__c);
            System.debug('DateTime 02'+acc.DateTimeField__c);
            
        }
    }
    if(Trigger.isInsert && Trigger.isAfter){
        
    }
    
    if(Trigger.isUpdate && Trigger.isBefore){
        
        List<Account> acc =  Trigger.old;
        List<Account> accNew = Trigger.new;
        Map<Id,Account> oldMap = Trigger.oldMap;
        Map<Id,Account> newMap = Trigger.newMap;
        
        for(Account a1: accNew){
            if(oldMap.get(a1.Id).Name=='Govind' && newMap.get(a1.Id).Name == 'Nikhil'){
                a1.addError('Not Allowed');
            }
        }
        
            
    }
    
    /*AccountTriggerHandler.searchUser();
    
   
    List<Contact> conList = new List<Contact>();
    Set<Id> accId = new Set<Id>();
    Integer i = 0;
    if(Trigger.isBefore){
    for(Account a : Trigger.New){       
        if(a.Hello__C.equals('Welcome')){   
            i++;     
            a.Hello__c = 'Welcome'+1;            
        }
        a.Weather__c = 'Hot;Cool';
    }
    }/*
    if(Trigger.isAfter){
        for(Account acc:Trigger.new){
            if(!acc.Name.equals(Trigger.oldMap.get(acc.id).Name)){
                accId.add(acc.Id);
            }
        }
        for(Contact con :[SELECT LastName, Account.Name From Contact WHERE AccountId IN :accId]){
            con.LastName = con.Account.Name;
            System.debug('Update has been made');
            conList.add(con);
        }
        if(conList.size()>0){
            update conList;
        }
        
    }
        
    if(Trigger.isInsert){
        if(Trigger.isBefore){
            System.debug('In Before Insert');
            Account acc = Trigger.new;
            acc.Name = 'TestAutoPopulate';
        }
        if(Trigger.isAfter){
            
        }
    }
    
    if(Trigger.isUpdate){
        if(Trigger.isBefore){
            
        }
        if(Trigger.isAfter){
            
        }
    }*/
}