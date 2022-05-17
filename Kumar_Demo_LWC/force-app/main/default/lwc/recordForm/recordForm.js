import { LightningElement, api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import STUDENT_OBJECT from '@salesforce/schema/student__c';
import NAME_FIELD from '@salesforce/schema/student__c.Name';
import AGE_FIELD from '@salesforce/schema/student__c.Age__c';
import GENDER_FIELD from '@salesforce/schema/student__c.Gender__c';
import MOBILE_FIELD from '@salesforce/schema/student__c.Mobile__c';

export default class RecordForm extends LightningElement {
    @api objectApiName = STUDENT_OBJECT;
    fields = [NAME_FIELD, AGE_FIELD, GENDER_FIELD, MOBILE_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Student created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}