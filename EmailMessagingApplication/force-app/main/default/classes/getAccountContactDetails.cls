public with sharing class getAccountContactDetails {
    @AuraEnabled
    public static List<AccountContact> getAccountContactfieldValues(){
        try {
            list<contact> conlist  = [select Id,lastname,firstname,account.Name,account.rating,account.Industry from contact where accountid != null];
            list<AccountContact> lst_AccountContact = new list<AccountContact>();
            for(contact con : conlist){
                AccountContact obj = new AccountContact();
                obj.Id = con.Id;
                obj.LastName = con.lastName;
                obj.FirstName = con.firstName;
                obj.AccName = con.account.Name;
                obj.AccRating = con.account.rating;
                obj.AccIndustry = con.account.Industry;
                lst_AccountContact.add(obj);
            }
            return lst_AccountContact;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    public class AccountContact {
        @AuraEnabled
        public string Id;
        @AuraEnabled
        public string LastName;
        @AuraEnabled
        public string FirstName;
        @AuraEnabled
        public string AccName;
        @AuraEnabled
        public string AccRating;
        @AuraEnabled
        public string AccIndustry;
    }
}
