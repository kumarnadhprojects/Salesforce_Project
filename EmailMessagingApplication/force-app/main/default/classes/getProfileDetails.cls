public with sharing class getProfileDetails {
    @AuraEnabled
    public static string getprofileName(){
        try {
            String UserProfile = UserInfo.getProfileId();
            Profile P = [select Id,Name from profile where Id=:UserProfile];
            String ProfileName = P.Name;
            return ProfileName;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
