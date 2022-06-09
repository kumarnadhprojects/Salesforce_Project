import { LightningElement, api } from 'lwc';
import INCOMEOBJECT from '@salesforce/schema/Income_Detail__c';
import NAME_FIELD from '@salesforce/schema/Income_Detail__c.Name';
import OPPORTUNITY_FIELD from '@salesforce/schema/Income_Detail__c.Opportunity_name__c';
import getfinaltermDetails from '@salesforce/apex/getfinalterm.getfinaltermDetails';
import getIncomeDetailsValue from '@salesforce/apex/getfinalterm.getIncomeDetailsValue';

export default class IncomeDetails extends LightningElement {
    // Expose a field to make it available in the template
    @api renderDetailsPage;
    @api cancelBtnValue;

    // Flexipage provides recordId and objectApiName
    @api incomeDetailId;
    @api recordId;
    @api objectApiName = INCOMEOBJECT;

    fields = [NAME_FIELD, OPPORTUNITY_FIELD];

    connectedCallback(){
        getfinaltermDetails({UserId:this.incomeDetailId})
        .then(result1=>{
            getIncomeDetailsValue()
            .then(result2=>{
                for(let i=0;i<result2.length;i++){
                    if(result2[i].incomeOpp == result1){
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

    handleInsert(){
        this.renderDetailsPage = 'Step2';
        const eve = new CustomEvent('rendercmp',{detail:this.renderDetailsPage});
        this.dispatchEvent(eve);
    }

    handlecancel(){
        this.cancelBtnValue = 'Step2';
        const eve = new CustomEvent('rendercancel',{detail:this.cancelBtnValue});
        this.dispatchEvent(eve);
    }
}