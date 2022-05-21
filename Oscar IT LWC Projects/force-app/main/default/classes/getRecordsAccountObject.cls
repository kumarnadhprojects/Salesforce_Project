public with sharing class getRecordsAccountObject {
    @AuraEnabled
    public static List<Account> getAccountRecords(){
        try {
            List<Account> accRec = [select Id,Name,Industry,Rating from Account where Rating != null];
            return accRec;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

   @AuraEnabled
   public static Map<String,String> getMapValues(){
       try {
            Map<String,String> oppMap = new Map<String,String>();
            List<Opportunity> oppList = [select Id,Name,Account.Name,StageName,CloseDate from Opportunity where StageName = 'Closed won'];
            for(Opportunity opp:oppList){
                oppMap.put(opp.Name, opp.Account.Name);
            }
            return oppMap;
       } catch (Exception e) {
           throw new AuraHandledException(e.getMessage());
       }
    }

    @AuraEnabled
    public static List<Student_school__c> getStudentMarks(){
        try {
            List<Student_school__c> studentMarks = [select Name,Marks__c from Student_school__c where Marks__c != null];
            return studentMarks;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
