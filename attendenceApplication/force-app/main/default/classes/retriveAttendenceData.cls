public with sharing class retriveAttendenceData {
    @AuraEnabled(cacheable=true)
    public static list<Attendence__c> getAttendence(String studentName, String Batch,Date fromDate,Date toDate){
        try {
            list<Attendence__c> att = [select Student_Name__r.Name,Present_Absent__c,Date__c,Student_Name__r.Batches__c from Attendence__c where Student_Name__r.Name=: studentName AND Student_Name__r.Batches__c =: Batch AND Date__c >=: fromDate AND Date__c <=: toDate WITH SECURITY_ENFORCED ORDER BY Date__c];
            return att;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
