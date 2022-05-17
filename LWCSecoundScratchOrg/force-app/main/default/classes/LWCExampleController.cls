public inherited sharing class LWCExampleController {
    @AuraEnabled(cacheable=true)
    public static List<Account> displayAccounts(){
        List<Account> acclist=[select Id,Name from Account];
        return acclist;
    }
}