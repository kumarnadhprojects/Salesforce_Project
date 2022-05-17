import { LightningElement,wire,track,api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getRecordsDetails from '@salesforce/apex/getRecords.getRecordsDetails';
import CERTIFICATE_OBJ from '@salesforce/schema/certification__c';
import NAME_FIELD from '@salesforce/schema/certification__c.Name';
import DESIGNATION_FIELD from '@salesforce/schema/certification__c.Designation_of_course__c';
import STUNAME_FIELD from '@salesforce/schema/certification__c.Student_Name__c';
import ISSUEDATE_FIELD from '@salesforce/schema/certification__c.Issue_Date__c';

const column =[
    {label:'Course name',fieldName:'Name',type:'text'},
    {label:'Student name',fieldName:'studentName'},
    {label:'Designation of course',fieldName:'Designation_of_course__c',type:'text'},
    {label:'Issue Date',fieldName:'Issue_Date__c',type:'text'}
];

export default class StudentCertificationProject extends LightningElement {
    error;
    records;
    wiredRecords;
    coursename;
    designationOfCourse;
    issueDate;
    status;
    student_Name;
    columnTable = column;
    @track isModalOpen = false;
    @track cretificateId;

    fields = [NAME_FIELD,ISSUEDATE_FIELD,STUNAME_FIELD,DESIGNATION_FIELD];

    // Flexipage provides recordId and objectApiName
    @api recordId;
    @api objectApiName = CERTIFICATE_OBJ;

    handleChange(event) {
        this.student_Name = event.target.value;
        if(event.target.value == ''){
            this.status = false;
        }else{
            this.status = true;
        }
    }

    handleCancel(){
        this.isModalOpen = false;
    }

    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Certificate Created Successfully",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }

    @wire(getRecordsDetails,{student_Name:'$student_Name'})
    wiredAccount(value) {
        this.wiredRecords = value;
        const { data, error } = value;
        if (data) {
            let tempRecords = JSON.parse( JSON.stringify( data ) );
            tempRecords = tempRecords.map( row => {
                return { ...row, studentName: row.Student_Name__r.Name };
            })
            this.records = tempRecords;
            this.error = undefined;
        } else if ( error ) {
            this.error = error;
            this.records = undefined;
        }

    }
    openCertificateModel(){
        this.isModalOpen = true;
        this.status = false;
    }
    closeModal() {
        this.isModalOpen = false;
        this.status = false;
        location.reload();
    }
}