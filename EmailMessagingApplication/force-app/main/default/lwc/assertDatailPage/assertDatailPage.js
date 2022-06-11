import { LightningElement, api,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {  getRecordNotifyChange } from 'lightning/uiRecordApi';
import ASSERTOBJECT from '@salesforce/schema/Asset_Detail__c';
import USER_NAME_FIELD from '@salesforce/schema/Asset_Detail__c.OwnerId';
import NAME_FIELD from '@salesforce/schema/Asset_Detail__c.Name';
import OPPORTUNITY_FIELD from '@salesforce/schema/Asset_Detail__c.Opportunity_name__c';
import getfinaltermDetails from '@salesforce/apex/getfinalterm.getfinaltermDetails';
import getAssertDetailsValue from '@salesforce/apex/getfinalterm.getAssertDetailsValue';
import getChangeOpportunityOwner from '@salesforce/apex/changeOwner.ChangeOpportunityOwner';

export default class AssertDatailPage extends LightningElement {
    @api renderDetailsPage;
    @api cancelBtnValue;
    @track isModalOpen = false;
    @api selectedId;
    @api childObjectApiName = 'Asset_Detail__c';
    @api targetFieldApiName = 'Username__c'; //AccountId is the default value
    @api fieldLabel = 'Change Owner';
    @api disabled = false;
    @api value;
    @api required = false;

    // Flexipage provides recordId and objectApiName
    @api assertDetailId;
    @api recordId;
    @api objectApiName = ASSERTOBJECT;

    fields = [NAME_FIELD, OPPORTUNITY_FIELD,USER_NAME_FIELD];
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
        // User Details
        alert(this.selectedId);
        getChangeOpportunityOwner({OpportunityId: this.recordId,SelectedUserId: this.selectedId})
        .then(result => {
            const event = new ShowToastEvent({
                title: 'Success',
                message: 'Opportunity Ownersip changed successfully',
                variant: 'success',
            });
            this.dispatchEvent(event);
            getRecordNotifyChange([{recordId: this.recordId}]);
        })
        .catch(error=>{
            const event = new ShowToastEvent({
                title: "Error on update",
                message: error.body.message,
                variant: "error",
                mode: 'sticky',
            });
            this.dispatchEvent(event);
        });
        // User Details
    }

    handleChange(event) {
        // Creates the event
        this.selectedId = event.target.value;
    }

    @api isValid() {
        if (this.required) {
            this.template.querySelector('lightning-input-field').reportValidity();
        }
    }
}