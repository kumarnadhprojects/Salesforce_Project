import { LightningElement, wire, api} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import retriveContactData from '@salesforce/apex/getContactAccountName.retriveContactData';

const FIELDS = [
    'Contact.Name',
    'Contact.Title',
    'Contact.Phone',
    'Contact.Email'
];

export default class WireAdopterExample2 extends LightningElement {
    @api recordId;

    @wire(getRecord,{recordId:'003N000001tpG4AIAU',fields:FIELDS})
    contact;

    @wire(retriveContactData,{keySearch:'003N000001tpG4AIAU'})
    contacts;
    

    get name(){
        return this.contact.data.fields.Name.value;
    }

    get title(){
        return this.contact.data.fields.Title.value;
    }

    get phone(){
        return this.contact.data.fields.Phone.value;
    }

    get email(){
        return this.contact.data.fields.Email.value;
    }
}