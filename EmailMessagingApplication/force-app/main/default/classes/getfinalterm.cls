public with sharing class getfinalterm {

    @AuraEnabled(cacheable=true)
    public static Object ChangeOpportunityOwner(Object OpportunityId){
        try {
            //Asset_Detail__c opp = [SELECT Id, OwnerId FROM Asset_Detail__c WHERE Id = :OpportunityId];
            //opp.OwnerId = UserInfo.getUserId();
            // Update opp;
            // "[\"0055j000002Twl7AAC\"]"
            // String UserValue = OpportunityId.replaceAll(regExp, replacement);
            // User ass = [select Id,Name from User where Id =: UserConVal];
            // System.debug(ass.Name);
            Return OpportunityId;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static string getfinaltermDetails(String UserId){
        try {
            opportunity Opp = [select Id,Name from opportunity where Id=:UserId];
            String UserIdValue = Opp.Name;
            return UserIdValue;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<finalTermsValue> getFinalTermsValue(){
        try {
            List<finalTermsValue> finStr = new List<finalTermsValue>();
            List<Final_Term__c> fin = [select Id,Opportunity_name__r.Name from Final_Term__c];
            for(Final_Term__c finVal:fin){
                finalTermsValue obj = new finalTermsValue();
                obj.finalTerms = finVal.Opportunity_name__r.Name;
                obj.Id = finVal.Id;
                finStr.add(obj);
            }
            return finStr;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    public class finalTermsValue{
        @AuraEnabled
        public string finalTerms;
        @AuraEnabled
        public string Id;
    }

    @AuraEnabled
    public static List<assertTermsValue> getAssertDetailsValue(){
        try {
            List<assertTermsValue> assStr = new List<assertTermsValue>();
            List<Asset_Detail__c> ass = [select Id,Opportunity_name__r.Name from Asset_Detail__c];
            for(Asset_Detail__c assVal:ass){
                assertTermsValue obj = new assertTermsValue();
                obj.assertOpp = assVal.Opportunity_name__r.Name;
                obj.Id = assVal.Id;
                assStr.add(obj);
            }
            return assStr;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    public class assertTermsValue{
        @AuraEnabled
        public string assertOpp;
        @AuraEnabled
        public string Id;
    }

    @AuraEnabled
    public static List<incomeDetailsValue> getIncomeDetailsValue(){
        try {
            List<incomeDetailsValue> incStr = new List<incomeDetailsValue>();
            List<Income_Detail__c> inc = [select Id,Opportunity_name__r.Name from Income_Detail__c];
            for(Income_Detail__c incVal:inc){
                incomeDetailsValue obj = new incomeDetailsValue();
                obj.incomeOpp = incVal.Opportunity_name__r.Name;
                obj.Id = incVal.Id;
                incStr.add(obj);
            }
            return incStr;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    public class incomeDetailsValue{
        @AuraEnabled
        public string incomeOpp;
        @AuraEnabled
        public string Id;
    }

    @AuraEnabled
    public static List<loanDetailsValue> getloanDetailsValue(){
        try {
            List<loanDetailsValue> lonStr = new List<loanDetailsValue>();
            List<Loan_Application_Detail__c> inc = [select Id,Opportunity_name__r.Name from Loan_Application_Detail__c];
            for(Loan_Application_Detail__c lonVal:inc){
                loanDetailsValue obj = new loanDetailsValue();
                obj.loanOpp = lonVal.Opportunity_name__r.Name;
                obj.Id = lonVal.Id;
                lonStr.add(obj);
            }
            return lonStr;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    public class loanDetailsValue{
        @AuraEnabled
        public string loanOpp;
        @AuraEnabled
        public string Id;
    }

    // @AuraEnabled
    // public static User ChangeOpportunityOwner(String OpportunityId) {
    //     //Asset_Detail__c opp = [SELECT Id, OwnerId FROM Asset_Detail__c WHERE Id = :OpportunityId];
    //     //opp.OwnerId = UserInfo.getUserId();
    //     // Update opp;
    //     System.debug(OpportunityId);
    //     user ass = [select Id,Name from User where Id =: OpportunityId];
    //     System.debug(ass.Name);
    //     //System.debug(opp);
    //     Return ass;
    // }


}
