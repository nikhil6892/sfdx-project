trigger CascaddDeleteTri on ParentObject__c (before Delete) {
    if(Trigger.isDelete && Trigger.isBefore){
        List<ChildObject__c> childObjRec = [Select id from ChildObject__c where ParentObject__c = :Trigger.old[0].id];
        delete childObjRec;
    }
}