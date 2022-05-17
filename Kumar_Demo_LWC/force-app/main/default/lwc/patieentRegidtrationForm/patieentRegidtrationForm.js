import { LightningElement, track } from 'lwc';
import NAME_FIELD from '@salesforce/schema/student__c.Name';
import MOBILE_FIELD from '@salesforce/schema/student__c.Mobile__c';
import AGE_FIELD from '@salesforce/schema/student__c.Age__c';
import EMAIL_FIELD from '@salesforce/schema/student__c.Email__c';
import GENDER_FIELD from '@salesforce/schema/student__c.Gender__c';
import HOSPITALNAME_FIELD from '@salesforce/schema/student__c.Hospital_Name__c';
import createData from '@salesforce/apex/insertData.createData';

export default class PatieentRegidtrationForm extends LightningElement {
    @track patient = {
        Name : NAME_FIELD,
        Mobile__c : MOBILE_FIELD,
        Age__c : AGE_FIELD,
        Email__c : EMAIL_FIELD,
        Gender__c : GENDER_FIELD,
        Hospital_Name__c : HOSPITALNAME_FIELD
    }

    handlename(event){
        this.patient.Name = event.target.value;
    }

    handlephone(event){
        this.patient.Mobile__c = event.target.value;
    }

    handleage(event){
        this.patient.Age__c = event.target.value;
    }

    handleemail(event){
        this.patient.Email__c = event.target.value;
    }

    handlegender(event){
        this.patient.Gender__c = event.target.value;
    }

    handlehname(event){
        this.patient.Hospital_Name__c = event.target.value;
    }

    handleSaveBtn(){
        createData(
            {
                stu : this.patient
            })
            location.reload();
            alert('Data saved Successfully..');
        }
}