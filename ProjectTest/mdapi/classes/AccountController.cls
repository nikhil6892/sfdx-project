public class AccountController {
    
    Public list<Contact> contactList {get;set;}
    
    public AccountController(){
        contactList =  [Select Id, FirstName, LastName From Contact LIMIT 10];
        System.debug(''+contactList);
        
    }
    
   @AuraEnabled
    public static object getAccounts(){
        
        return [Select Id, Name, BillingState, Website, Phone, Industry From Account LIMIT 10];
        
    }
    
    @AuraEnabled
    public static Map<Id, String> getAccountMap(){
        Map<Id, String> accountMap = new Map<Id, String>();
            for(Account acc: [Select Id, Name, BillingState, Website, Phone, Industry From Account LIMIT 10]){
                accountMap.put(acc.Id,acc.Name);
            }
        return accountMap;
    }

  
    @AuraEnabled
    public static object getDuplicateError(){
        
        Map <String, Schema.SObjectType> schemaMap = Schema.getGlobalDescribe();
		Map <String, Schema.SObjectField> fieldMap = schemaMap.get('Account').getDescribe().fields.getMap();
		schema.describefieldresult dfield = fieldMap.get('Demo__c').getDescribe();
		System.debug(''+dfield);
        return dfield;
        //return json.serialize(dfield);
    }
    
  
}