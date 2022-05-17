public with sharing class AccountHelper {
    @AuraEnabled(cacheable=true)
    public static List<student__c> getAccountList() {
        return [SELECT Name, Email__c, Gender__c, Hospital_Name__c,
        Mobile__c FROM student__c];
    }
}