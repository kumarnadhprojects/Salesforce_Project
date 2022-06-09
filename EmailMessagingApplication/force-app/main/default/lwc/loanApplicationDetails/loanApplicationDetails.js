import { LightningElement, api } from 'lwc';
import LOANOBJECT from '@salesforce/schema/Loan_Application_Detail__c';
import NAME_FIELD from '@salesforce/schema/Loan_Application_Detail__c.Name';
import OPPORTUNITY_FIELD from '@salesforce/schema/Loan_Application_Detail__c.Opportunity_name__c';
import getfinaltermDetails from '@salesforce/apex/getfinalterm.getfinaltermDetails';
import getloanDetailsValue from '@salesforce/apex/getfinalterm.getloanDetailsValue';

export default class LoanApplicationDetails extends LightningElement {
    // Expose a field to make it available in the template
    @api renderDetailsPage;
    @api cancelBtnValue;

    // Flexipage provides recordId and objectApiName
    @api loanDetailId;
    @api recordId;
    @api objectApiName = LOANOBJECT;

    fields = [NAME_FIELD, OPPORTUNITY_FIELD];

    connectedCallback(){
        getfinaltermDetails({UserId:this.loanDetailId})
        .then(result1=>{
            getloanDetailsValue()
            .then(result2=>{
                for(let i=0;i<result2.length;i++){
                    if(result2[i].loanOpp == result1){
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

    handleLoan(){
        this.renderDetailsPage = 'Step3';
        const eve = new CustomEvent('rendercmp',{detail:this.renderDetailsPage});
        this.dispatchEvent(eve);
    }

    handlecancel(){
        this.cancelBtnValue = 'Step3';
        const eve = new CustomEvent('rendercancel',{detail:this.cancelBtnValue});
        this.dispatchEvent(eve);
    }
}