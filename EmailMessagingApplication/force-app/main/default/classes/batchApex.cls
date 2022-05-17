public with sharing class batchApex implements Database.Batchable<Sobject>, Database.Stateful
{ 
    String emailName1;
    public batchApex(String emailName){
        emailName1 = emailName;
    }

    public Database.QueryLocator start(Database.BatchableContext bc)
    { 
        String query = 'SELECT Id,Name, Email FROM Contact where accountid = null'; 
        return Database.getquerylocator(query); 
    } 
    public void execute(Database.BatchableContext bc,List<contact> contacts)
    { 
        // 
    }

    public void finish(Database.BatchableContext bc)
    { 
        System.debug(emailName1);
        // sendin email notification to contacts regarding this 
        List<Contact> contacts = [Select Id,Name,Email from contact WHERE Email LIKE:emailName1];
        // Step 3 
        List<ID> rec_ids_emailing = new List<ID>(); 
        //STep 3.b 
        for(Contact c : contacts){ 
            // id = id of each contact 
            rec_ids_emailing.add(c.id);//add each id to the collection
         }
         //Step 4 
         Messaging.MassEmailMessage my_mail = new Messaging.MassEmailMessage(); 
         //STep 5 REcipients 
         my_mail.setTargetObjectIds(rec_ids_emailing); 
         //step 6 
         EmailTemplate et = new EmailTemplate(); et = [select id from EmailTemplate where name = 'Sales: This is sample sales templete']; 
         //Step 7 => Subject, Body 
         my_mail.setTemplateId(et.id); 
         //Step 8 sendDisplay name 
         my_mail.setSenderDisplayName('Kumarnadh Babu Eluru'); 
         //Step 9 
         Messaging.sendEmail(new List<Messaging.MassEmailMessage>{my_mail});
    }
}