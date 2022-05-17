public with sharing class getRecords {
    @AuraEnabled(cacheable=true)
    public static list<certification__c> getRecordsDetails(String student_Name){
        try {
            list<certification__c> cer = [select Name,Student_Name__r.Name,Designation_of_course__c,Issue_Date__c from certification__c where Student_Name__r.Name LIKE :'%'+student_Name+'%' ORDER BY Student_Name__r.Name];
            return cer;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
