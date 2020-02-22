trigger autoCampaignMemberStatusTrigger on Campaign (after insert) {
   
    List<Campaign> newCamps = [select Id from Campaign where Id IN :trigger.new AND ParentID = Null];
    List<CampaignMemberStatus> cms = new List<CampaignMemberStatus>();
    Set<Id> camps = new Set<Id>();
    List<CampaignMemberStatus> cms2Delete = new List<CampaignMemberStatus>();
    List<CampaignMemberStatus> cms2Insert = new List<CampaignMemberStatus>();
   
    for(Campaign camp : newCamps){
      
            camps.add(camp.Id);
    }  
   for (CampaignMemberStatus cm: [Select Id, Label, CampaignID  FROM CampaignMemberStatus WHERE CampaignID IN :camps]){
      if(cm.Label == 'Responded' ){
            CampaignMemberStatus cms1 = new CampaignMemberStatus(CampaignId=cm.CampaignID, Label='Email Sent', HasResponded=false, IsDefault = True, SortOrder=3);          
            System.debug(cms1);
            cms2Delete.add(cm);
            cms2Insert.add(cms1);
           
      }  else if(cm.Label == 'Sent'){          
            CampaignMemberStatus cms2 = new CampaignMemberStatus(CampaignId=cm.CampaignID, Label='Called', HasResponded=false, SortOrder=4);
            System.debug(cms2);
            cms2Delete.add(cm);
            cms2Insert.add(cms2);
           
            CampaignMemberStatus cms3 = new CampaignMemberStatus(CampaignId = cm.CampaignId, HasResponded=true, Label = 'Appointment Set', SortOrder = 5);
            cms2Insert.add(cms3);

      }
    }
    //perform insert before delete because system requires at least one CMS for a Campaign
    insert cms2Insert;
    delete cms2Delete;
}