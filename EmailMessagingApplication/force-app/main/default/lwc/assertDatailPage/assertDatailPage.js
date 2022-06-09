import { LightningElement, api,track } from 'lwc';
import ASSERTOBJECT from '@salesforce/schema/Asset_Detail__c';
import USER_NAME_FIELD from '@salesforce/schema/Asset_Detail__c.Username__c';
import NAME_FIELD from '@salesforce/schema/Asset_Detail__c.Name';
import OPPORTUNITY_FIELD from '@salesforce/schema/Asset_Detail__c.Opportunity_name__c';
import getfinaltermDetails from '@salesforce/apex/getfinalterm.getfinaltermDetails';
import getAssertDetailsValue from '@salesforce/apex/getfinalterm.getAssertDetailsValue';
import getChangeOpportunityOwner from '@salesforce/apex/getfinalterm.ChangeOpportunityOwner';

export default class AssertDatailPage extends LightningElement {
    @api selectedRecordId; //store the record id of the selected 
    @api renderDetailsPage;
    @api cancelBtnValue;
    @track isModalOpen = false;
    // Expose a field to make it available in the template

    // Flexipage provides recordId and objectApiName
    @api assertDetailId;
    @api recordId;
    @api objectApiName = ASSERTOBJECT;

    fields = [NAME_FIELD, OPPORTUNITY_FIELD];
    fieldsInmodel = [USER_NAME_FIELD];

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

    handleAssert(){
        this.renderDetailsPage = 'Step1';
        const eve = new CustomEvent('rendercmp',{detail:this.renderDetailsPage});
        this.dispatchEvent(eve);
    }

    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
    }

    handleValueSelcted(event) {
        this.selectedRecordId = event.detail;
    }

    submitDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isModalOpen = false;
        // let userId = JSON.stringify(this.selectedRecordId);
        let userId = this.selectedRecordId;
        // User Details
        getChangeOpportunityOwner({OpportunityId: userId})
        .then(result=>{
            alert(JSON.stringify(result));
        })
        .catch(error=>{
            alert(error);
        })
        // User Details
    }

    validateLookupField() {
        this.template.querySelector('c-custom-lookup').isValid();
    }
}