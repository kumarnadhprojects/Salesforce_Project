public with sharing class getStudentCertificate {
    @AuraEnabled
    public static list<studentCertificate> getStudentCertificateDetails(){
        try {
            list<certification__c> certi = [select Id,Name,Student_Name__r.name,Designation_of_course__c,Issue_Date__c from certification__c];
            list<studentCertificate> lst_studentCertification = new list<studentCertificate>();
            for(certification__c cer:certi){
                studentCertificate obj = new studentCertificate();
                obj.Id = cer.Id;
                obj.CertificateName = cer.Name;
                obj.StudentName = cer.Student_Name__r.name;
                obj.DesignationOfCourse = cer.Designation_of_course__c;
                obj.IssueDate = cer.Issue_Date__c;
                lst_studentCertification.add(obj);
            }
            return lst_studentCertification;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    public class studentCertificate{
        @AuraEnabled
        public String Id;
        @AuraEnabled
        public String CertificateName;
        @AuraEnabled
        public String StudentName;
        @AuraEnabled
        public String DesignationOfCourse;
        @AuraEnabled
        public Date IssueDate;
    }
}
