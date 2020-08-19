trigger Test1Trigger on Test_Custom_Object_1__c (before insert,after insert, before update, after update) {
    Test_Custom_Object_2__c[] test = new List<Test_Custom_Object_2__c>();
for(Integer i=0;i<210;i++) {
    Test_Custom_Object_2__c a = new Test_Custom_Object_2__c(Name='Acme' + i);
    test.add(a);
}
//insert test;
}