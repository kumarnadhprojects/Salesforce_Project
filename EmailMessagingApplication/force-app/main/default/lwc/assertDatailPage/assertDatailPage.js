import { LightningElement, api } from 'lwc';
import ASSERTOBJECT from '@salesforce/schema/Asset_Detail__c';
import NAME_FIELD from '@salesforce/schema/Asset_Detail__c.Name';
import OPPORTUNITY_FIELD from '@salesforce/schema/Asset_Detail__c.Opportunity_name__c';
import getfinaltermDetails from '@salesforce/apex/getfinalterm.getfinaltermDetails';
import getAssertDetailsValue from '@salesforce/apex/getfinalterm.getAssertDetailsValue';

export default class AssertDatailPage extends LightningElement {
    // Expose a field to make it available in the template
    nameField = NAME_FIELD;
    opportunityField = OPPORTUNITY_FIELD;

    // Flexipage provides recordId and objectApiName
    @api assertDetailId;
    @api recordId;
    @api objectApiName = ASSERTOBJECT;

    fields = [NAME_FIELD, OPPORTUNITY_FIELD];

    connectedCallback(){
        getfinaltermDetails({UserId:this.assertDetailId})
        .then(result1=>{
            getAssertDetailsValue()
            .then(result2=>{
                for(let i=0;i<result2.length;i++){
                    if(result2[i].assertOpp == result1){
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