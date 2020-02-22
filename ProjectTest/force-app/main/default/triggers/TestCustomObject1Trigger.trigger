trigger TestCustomObject1Trigger on Test_Custom_Object_1__c (before insert) {
    
    set<Id> idSet = new set<Id>();
    if(checkRecursive.runOnce()){
    if(Trigger.isUpdate && Trigger.isAfter){
        for(Test_Custom_Object_1__c testObj : Trigger.new){
            idSet.add(testObj.id);
        }
        for(Id testId : idSet){
            System.debug('Here'+idSet);
            //Flow.Interview flow = new Flow.Interview.CreateTaskFlow(new map<String,Object> 
                                                                    //{'recordId' => testId, 'objName' => 'Test Update'});     
			//flow.start();
        }     
    }
    }

}