public with sharing class getContactAccountName {
    @AuraEnabled(cacheable=true)
    public static List<Contact> retriveContactData(string keySearch){
        List<Contact> contactName = [Select Id,Account.Name From Contact Where Id =:keySearch LIMIT 1];
        System.debug(contactName);
        return contactName;
    }
}
