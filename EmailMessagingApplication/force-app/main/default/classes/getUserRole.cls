public with sharing class getUserRole {
    @AuraEnabled
    public static string getUserRoleDetails(){
        try {
                Id userId = userinfo.getUserId();
                User userDetails =[SELECT Id,UserRole.Name FROM User where Id=:userId ];
                String UserRole = userDetails.UserRole.Name;
                return UserRole;
            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
            }
    }
}
