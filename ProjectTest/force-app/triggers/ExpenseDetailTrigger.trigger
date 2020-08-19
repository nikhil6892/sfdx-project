trigger ExpenseDetailTrigger on Expense_Detail__c (before insert,after insert) {
	
    /*List<Expense_Detail__c> expDeatilsList = new List<Expense_Detail__c>();
    List<Expense_Detail__Share> expDetailShares = new List<Expense_Detail__Share>();
    List<Expense_Detail__Share> expDetailSharesDel = new List<Expense_Detail__Share>();
    List<Id> parentIdLst =  new List<Id>();   
    
    if(Trigger.isAfter){
    	for(Expense_Detail__c expDetail:Trigger.new){            
            
			if(Trigger.isUpdate){
            	if(expDetail.User__c!= Trigger.oldMap.get(expDetail.Id).User__c)
                	parentIdLst.add(expDetail.Id);
            }
            	if(expDetail.User__c!=null){
            	System.debug('expDetail.User__c'+expDetail.User__c);
            	Expense_Detail__Share expShare = new Expense_Detail__Share();
            	expShare.ParentId = expDetail.Id;
            	expShare.UserOrGroupId = expDetail.User__c;
            	expShare.AccessLevel = 'edit';	
            	expShare.RowCause = Schema.Expense_Detail__Share.RowCause.Test_Apex_Manage_Sharing__c;
            	expDetailShares.add(expShare);
        	}
    	}
        for(Expense_Detail__Share exp : [SELECT Id FROM Expense_Detail__Share WHERE ParentId IN :parentIdLst AND RowCause = :Schema.Expense_Detail__Share.RowCause.Test_Apex_Manage_Sharing__c]){
        	System.debug('Hii There');
            expDetailSharesDel.add(exp);
        }
        delete expDetailSharesDel;
        insert expDetailShares;
    }*/
    List<Expense_Detail__c> expList = Trigger.new;
    
    if(Trigger.isInsert){
        if(Trigger.isBefore){
            System.debug('In Before Insert');
            System.debug(''+expList[0].Name);
            expList[0].Purpose_of_Trip__c = 'Time Pass';
        }
        if(Trigger.isAfter){
            System.debug('In After Insert');
            System.debug(''+expList[0].Name);
            Expense_Detail__c exp = new Expense_Detail__c();
            exp.Id = expList[0].Id;
            exp.Purpose_of_Trip__c = 'Time Pass 1';
            update exp;
        }
    }
    
    if(Trigger.isUpdate){
        if(Trigger.isBefore){
            System.debug('In Before Update');
            System.debug(''+expList[0].Name);
        }
        if(Trigger.isAfter){
            System.debug('In After Update');
            System.debug(''+expList[0].Name);
        }
    }
    
    
}