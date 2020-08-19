trigger ContentVersionTrigger on ContentVersion (after Insert) {
/*
(after delete, 
    after insert,  
    after undelete, 
    after update, 
    before delete, 
    before insert, 
    before update ) 
*/ 
    
        List<ContentDocumentLink> cdlList = new List<ContentDocumentLink>();
        List<Account> accList = new List<Account>();

        if(Trigger.isAfter && Trigger.isInsert){
            
            System.debug('ContentDocumentId'+Trigger.new[0].ContentDocumentId);
            ContentDocumentLink cdl = new ContentDocumentLink();
            cdl.ContentDocumentId = Trigger.new[0].ContentDocumentId;
            cdl.LinkedEntityId = '0F97F000000gtq5SAA';
            cdl.Visibility = 'AllUsers';
            cdl.ShareType = 'V';
            cdlList.add(cdl);
     
            
            ContentDocumentLink cdl2 = new ContentDocumentLink();
            cdl2.ContentDocumentId = Trigger.new[0].ContentDocumentId;
            cdl2.LinkedEntityId = '0057F000001fs1B';
            cdl2.Visibility = 'AllUsers';
            cdl2.ShareType = 'C';
            cdlList.add(cdl2);
            
            
            Account acc = new Account();
            acc.Name = 'Record Create From Content Trigger';
            accList.add(acc);
        }
        
        if(cdlList.size()>0){
            insert cdlList;
            for(ContentDocumentLink cdl:cdlList){
                System.debug('ContentDocumentLinkId:'+cdl.Id+' LinkedEntityId:'+cdl.LinkedEntityId);
            }  
        }
        insert accList;
        if(accList.size()>0){
            System.debug('AccountId:'+accList[0].Id);}
        
}