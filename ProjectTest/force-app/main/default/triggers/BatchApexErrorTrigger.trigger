trigger BatchApexErrorTrigger on BatchApexErrorEvent (after insert) {
    List <BatchLeadConvertErrors__c> listBatchLeadConverts = new List<BatchLeadConvertErrors__c>();
    BatchLeadConvertErrors__c batchLeadConvertObj;
    for(BatchApexErrorEvent batchEvent:Trigger.new){
        batchLeadConvertObj = new BatchLeadConvertErrors__c();
        batchLeadConvertObj.AsyncApexJobId__c  = batchEvent.AsyncApexJobId;
        batchLeadConvertObj.Records__c = batchEvent.JobScope;
        batchLeadConvertObj.StackTrace__c = batchEvent.StackTrace;
        listBatchLeadConverts.add(batchLeadConvertObj);
    }
    if(listBatchLeadConverts.size()>0)
    	insert listBatchLeadConverts;

}