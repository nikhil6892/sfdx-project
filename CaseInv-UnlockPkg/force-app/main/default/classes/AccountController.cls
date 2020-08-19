public with sharing class AccountController {   
   @AuraEnabled
    public static object getAccounts(){
        system.debug(''+[Select Id, Name, BillingState, Website, Phone, Industry From Account LIMIT 10]);
        return [Select Id, Name, BillingState, Website, Phone, Industry From Account LIMIT 10];
        
    } 
    
    @AuraEnabled
    public static String getCase(){
        
        return '500B0000005TYjnIAG';
        
    } 
    
    public static PageReference getAccountsCntrl(){
        system.debug(''+[Select Id, Name, BillingState, Website, Phone, Industry From Account LIMIT 10]);
        //return [Select Id, Name, BillingState, Website, Phone, Industry From Account LIMIT 10];
        PageReference myVFPage = new PageReference('/apex/testLightningRecordEditFRM');
		return myVFPage;
    } 
}