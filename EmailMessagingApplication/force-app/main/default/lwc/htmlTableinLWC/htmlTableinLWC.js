import { LightningElement,track } from 'lwc';
import getAccountContactfieldValues  from '@salesforce/apex/getAccountContactDetails.getAccountContactfieldValues';

export default class HtmlTableinLWC extends LightningElement {
    @track acclist = [];
    @track isLoading = true;
    connectedCallback(){
        getAccountContactfieldValues()
            .then(result=>{
            this.acclist =  result;
            // alert('Value is '+ JSON.stringify( this.acclist) );
            this.isLoading = false;
            })
            .catch(error=>{
                this.isLoading = false;
            })
    }
}