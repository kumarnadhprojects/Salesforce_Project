import { LightningElement,wire,track } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import STATES_FIELD from '@salesforce/schema/Account.States__c';
import CITIES_FIELD from '@salesforce/schema/Account.Citys__c';

export default class DependentFieldsUsingWireAdapter extends LightningElement {
    @track value;
    @track stateFieldData;
    @track citiFieldData;
    @track citiesValueOptions;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;

    @wire(getPicklistValues, {recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName: STATES_FIELD})
    statesField({data}){
        if(data){
            this.stateFieldData = data.values;
        }
    };

    @wire(getPicklistValues, {recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName: CITIES_FIELD})
    citiesField({data}){
        if(data){
            this.citiFieldData = data;
        }
    };

    handlestates(event){
        let key = this.citiFieldData.controllerValues[event.target.value];
        this.citiesValueOptions = this.citiFieldData.values.filter(opt => opt.validFor.includes(key));
    }
}