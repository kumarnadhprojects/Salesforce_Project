public with sharing class getEmail{
    String emailName;

    @AuraEnabled(cacheable=true)
    public static void getEmailDetails(String emailName){
        try{
            batchApex bp = new batchApex(emailName);
            Database.executeBatch(bp);
        }
        catch(Exception e){
            System.debug(e);
        }        
    }
}
