public with sharing class AccountManager {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return[SELECT Id, Name, Phone FROM Account LIMIT 10 OFFSET 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> searchAccounts(String searchKey){
        searchKey = '%'+searchKey+'%';
        return[SELECT Id, Name, Phone FROM Account WHERE Name = :searchKey LIMIT 10];
    }
    
}
