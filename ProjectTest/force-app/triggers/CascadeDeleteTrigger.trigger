trigger CascadeDeleteTrigger on Test_Custom_Object_2__c (before Delete) {
    if(Trigger.isDelete && Trigger.isBefore){
        //List<Test_Custom_Object_1__c> listObj = [Select id from Test_Custom_Object_1__c where Test_Custom_Object_2__c = :Trigger.old[0].id];
        //delete listObj;
    }

}