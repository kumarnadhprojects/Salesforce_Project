import { LightningElement, track, wire} from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import STUDENT_OBJECT from '@salesforce/schema/Student_school__c';
import STUDENT_BATCHES_FIELD from '@salesforce/schema/Student_school__c.Batches__c';

export default class WireMethodandComboboxRetriveData extends LightningElement {
    @track value;

    @wire(getObjectInfo, { objectApiName: STUDENT_OBJECT })
    objectInfo;

    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: STUDENT_BATCHES_FIELD})
    BatchPicklistValues;

    handleChange(event) {
        this.value = event.detail.value;
    }
}