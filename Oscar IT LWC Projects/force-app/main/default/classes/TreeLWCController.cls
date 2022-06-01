public class TreeLWCController {
	@AuraEnabled
    public static List<item> getAccountTree(){
        List<item> items = new List<item>();
        //get list of accounts and respective contacts
        List<Account> acctList = [SELECT Id, Name, (SELECT Id, Name From Contacts) From Account];
        for(Account acc: acctList){
            //get contacts of current account record
            List<item> conitems = new List<item>();
            for(Contact c: acc.Contacts){
                // System.debug(c);
                //add contact items
                item conitem = new item();
                conitem.label = c.Name;
                conitem.name = String.valueOf(c.Id);
                conitem.expanded = false;
                conitem.items = null;
                conitems.add(conitem);
            }
             
            //add account items
            item accitem = new item();
            accitem.label = acc.Name;
            accitem.name = String.valueOf(acc.Id);
            accitem.expanded = false;
            accitem.items = conitems;
            items.add(accitem);
        }
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
    }
// Using Javascript tree
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