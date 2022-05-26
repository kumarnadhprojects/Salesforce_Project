import { LightningElement, api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class PreventDefaultExample extends LightningElement {
    // The record page provides recordId and objectApiName
    @api objectApiName = ACCOUNT_OBJECT;

    fields = [NAME_FIELD, REVENUE_FIELD, INDUSTRY_FIELD];

    handleSubmit(event) {
        event.preventDefault(); // stop the form from submitting
        const fields = event.detail.fields;
        fields.Phone = '9874523150'; // modify a field
        this.template.querySelector('lightning-record-form').submit(fields);
    }
}