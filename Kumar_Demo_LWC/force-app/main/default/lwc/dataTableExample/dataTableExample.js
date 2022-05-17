import { LightningElement ,wire, track} from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';

export default class DataTableExample extends LightningElement {
@track columns = [{
    label: 'Student name',
    fieldName: 'Name',
    type: 'text',
    sortable: true
},
{
    label: 'Email',
    fieldName: 'Email__c',
    type: 'Email',
    sortable: true
},
{
    label: 'Gender',
    fieldName: 'Gender__c',
    type: 'Picklist',
    sortable: true
},
{
    label: 'Hospital Name',
    fieldName: 'Hospital_Name__c',
    type: 'text',
    sortable: true
},
{
    label: 'Mobile',
    fieldName: 'Mobile__c',
    type: 'Phone',
    sortable: true
}
];
@track error;
@track accList ;
@wire(getAccountList)
wiredAccounts({
    error,
    data
}) {
        if (data) {
            this.accList = data;
        } else if (error) {
            this.error = error;
        }
    }
}