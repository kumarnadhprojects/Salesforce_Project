import { LightningElement, api } from 'lwc';
import FINALOBJECT from '@salesforce/schema/Final_Term__c';
import NAME_FIELD from '@salesforce/schema/Final_Term__c.Name';
import OPPORTUNITY_FIELD from '@salesforce/schema/Final_Term__c.Opportunity_name__c';
import getfinaltermDetails from '@salesforce/apex/getfinalterm.getfinaltermDetails';
import getFinalTermsValue from '@salesforce/apex/getfinalterm.getFinalTermsValue';

export default class FinalTermsDetails extends LightningElement {
    // Expose a field to make it available in the template
    nameField = NAME_FIELD;
    opportunityField = OPPORTUNITY_FIELD;

    // Flexipage provides recordId and objectApiName
    @api finalTermId;
    @api recordId;
    @api objectApiName = FINALOBJECT;

    fields = [NAME_FIELD, OPPORTUNITY_FIELD];

    connectedCallback(){
        getfinaltermDetails({UserId:this.finalTermId})
        .then(result1=>{
            getFinalTermsValue()
            .then(result2=>{
                for(let i=0;i<result2.length;i++){
                    if(result2[i].finalTerms == result1){
                        this.recordId = result2[i].Id;
                    }
                }
            })
            .catch(error=>{
                console.log(error);
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }
}