public with sharing class ContactController {

@AuraEnabled(cacheable=true)
public static List<Contact> getContactList() {
    return [SELECT Id, Name, Title, Phone, Email FROM Contact];
}

@AuraEnabled(cacheable=true)
public static List<Contact> findContacts(String searchKey) {
    String key = '%' + searchKey + '%';
    return [SELECT Id, Name, Title, Phone, Email FROM Contact WHERE Name LIKE :key LIMIT 10];
}

@AuraEnabled(cacheable=true)
public static Contact getSingleContact(){
    return [SELECT Id, Name, Title, Phone, Email FROM Contact LIMIT 1];
}

@AuraEnabled(cacheable=true)
public static Map<String,List<Contact>> getContacts(String acctType, String industry,String mailingCountry) {
Map<String,List<Contact>> rcMap=new Map<String,List<Contact>>();

List<Contact> cLst=new List<Contact>([SELECT Id, Name
FROM Contact WHERE Account.Type=:acctType
AND Account.Industry=:industry
AND MailingCountry =:mailingCountry
LIMIT 1]);
//ContactKeyCombination keyCombObj=createKeyCombo(acctType,industry,mailingCountry);
rcMap.put('Test',cLst);
System.debug('### rcMap: '+cLst);
return rcMap;
}

}