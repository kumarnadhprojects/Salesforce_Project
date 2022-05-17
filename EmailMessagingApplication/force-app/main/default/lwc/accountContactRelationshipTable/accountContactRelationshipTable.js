import { LightningElement,track } from 'lwc';
import getAccountContactfieldValues from '@salesforce/apex/getAccountContactDetails.getAccountContactfieldValues';

export default class AccountContactRelationshipTable extends LightningElement {
    @track isLoading = true; 
    @track acclist = [];

    @track columns = [
        { label: 'Id', fieldName: 'Id' , type: 'text'},
        { label: 'LastName', fieldName: 'LastName' , type: 'text'},
        { label: 'FisrtName', fieldName: 'FirstName', type: 'text' },
        { label: 'Account Name', fieldName: 'AccName', type: 'text' },
        { label: 'Account Rating', fieldName: 'AccRating', type: 'text' },
        { label: 'Account Industry', fieldName: 'AccIndustry', type: 'text' },
    ];

    connectedCallback(){
        getAccountContactfieldValues()
            .then(result=>{
            this.acclist =  result;
            alert('Value is '+ JSON.stringify( this.acclist) );
            this.isLoading = false;
            })
            .catch(error=>{
                this.isLoading = false;
            })
    }
}