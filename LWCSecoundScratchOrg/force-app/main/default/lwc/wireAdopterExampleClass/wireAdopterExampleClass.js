import { LightningElement, api, wire } from 'lwc';
import getRelatedContacts from '@salesforce/apex/wireController.getRelatedContacts';
const COLUMNS = [
    { label: 'Name', fieldName: 'Name', type: 'text' },
    { label: 'Title', fieldName: 'Title', type: 'text' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
];

export default class WireAdopterExampleClass extends LightningElement {
    columns = COLUMNS;
    @api recordId;
    @wire(getRelatedContacts, { accountId: '001N0000025b7NOIAY' })
    contacts;
}