public with sharing class insertData {
    @AuraEnabled
    public static student__c createData(student__c stu){
        insert stu;
        return stu;
    }
}
