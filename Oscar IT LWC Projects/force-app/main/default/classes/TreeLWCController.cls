public class TreeLWCController {
	@AuraEnabled
    public static List<item> getAccountTree(){
        List<item> items = new List<item>();
        List<Account> acctList = new List<Account>();
        //get list of accounts and respective contacts
        acctList = [SELECT Id, Name, (SELECT Id, Name From Contacts) From Account];
        for(Account acc: acctList){
             
            //get contacts of current account record
            List<item> conitems = new List<item>();
            for(Contact c: acc.Contacts){
                //add contact items
                item conitem = new item(c.Name, String.valueOf(c.Id), false, null);
                conitems.add(conitem);
            }
             
            //add account items
            item accitem = new item(acc.Name, String.valueOf(acc.Id), false, conitems);
            items.add(accitem);
        }
        system.debug(items);
        return items;
    }
     
    //Item Wrapper Class
    public class item{
        @AuraEnabled
        public String label;
        @AuraEnabled
        public String name;
        @AuraEnabled
        public Boolean expanded;
        @AuraEnabled
        public List<item> items;
         
        public item(String label, String name, Boolean expanded, List<item> items){
            this.label = label;
            this.name = name;
            this.expanded = expanded;
            this.items = items;
        }
    }

    @AuraEnabled
    public static list<AccConWrap> accountConTree(){
        list<account> acclist = [ select id,name,(select id,lastName,firstName from contacts) from account];
        list<AccConWrap> lst_accconwrap = new list<AccConWrap>();
        for(account acc : acclist){
          AccConWrap ac = new AccConWrap(); 
            ac.AccName = acc.Name;
            ac.conlist = acc.contacts;
            lst_accconwrap.add(ac);
        }
        return lst_accconwrap;
    }
    
    public class AccConWrap{
        @AuraEnabled
        public string AccName;
        @AuraEnabled
        public list<contact> conlist;
    }
}