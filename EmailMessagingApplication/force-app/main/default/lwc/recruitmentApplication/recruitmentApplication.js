import { LightningElement, api,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import HR_OBJECT from '@salesforce/schema/HR__c';
import JOBDESCRIPTION_FIELD from '@salesforce/schema/HR__c.Job_Description__c';
import CANDIDATEID_FIELD from '@salesforce/schema/HR__c.Candidate_Id__c';

export default class RecruitmentApplication extends LightningElement {
    @track isLoad = true;
    enable;
    disabledstage1 = true;
    stage1 = false;
    stage2 = false;
    stage5 = false;
    stage6 = false;
    stage2btn = false;
    dropdownstage2 = false;
    recordFormstage2 = true;
    value;
    value2;
    value3;
    value4;
    fieldId;
    refferDisp;
    vendorDisp;
    resonDisp;
    btndisable = false;
    btnenable = true;
    stage4 = false;
    btncancel = true;
    mainHeading = true;
    mainsubHeading = false;
    Vendorsubmittingtoclient = false;
    vendornotmovingforword = false;
    CTC = false;
    Feedbacktocandidate = false;
    HrAgreedwithvendor = false;
    Interviewschedule = false;
    PayrollSystem = false;
    thankyoucard = false;
    // Start Spinner Functionality
    doExpensiveThing() {
        // Do something here
        this.isLoad = false;
        this.stage1 = true;
    }
    
    connectedCallback(){
        clearTimeout(this.timeoutId); // no-op if invalid id
        this.timeoutId = setTimeout(this.doExpensiveThing.bind(this), 1000); // Adjust as necessary
    }

    // End Spinner Functionality

    // Expose a field to make it available in the template
    fields = [JOBDESCRIPTION_FIELD,CANDIDATEID_FIELD];

    // Flexipage provides recordId and objectApiName
    @api recordId = this.fieldId;
    @api objectApiName = HR_OBJECT;

    get options() {
        return [
            { label: '--Select--', value: 'select'},
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
        ];
    }

    get options2() {
        return [
            { label: '--Select--', value: 'select' },
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
        ];
    }

    get options3() {
        return [
            { label: '--Select--', value: 'select' },
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
        ];
    }

    get options4() {
        return [
            { label: '--Select--', value: 'select' },
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
        ];
    }

    handledropstage2(event) {
        this.value = event.detail.value;
        if(event.detail.value == 'Yes'){
            this.refferDisp = true;
            this.vendorDisp = true;
            this.stage4 = true;
        }else if(event.detail.value == 'No'){
            this.refferDisp = false;
            this.vendorDisp = true;
            this.stage4 = true;
        }
    }

    handledropstage4(event){
        this.value2 = event.detail.value;
        if(event.detail.value == 'Yes'){
            this.resonDisp = false;
            this.stage5 = true;

        }else if(event.detail.value == 'No'){
            this.resonDisp = true;
            this.stage5 = false;
            this.vendornotmovingforword = false;
            this.Vendorsubmittingtoclient = false;
            this.HrAgreedwithvendor = false;
            this.Interviewschedule = false;
            this.Feedbacktocandidate = false;
            this.CTC = false;
            this.PayrollSystem = false;
            this.stage6 = false;
        }
    }

    handledropstage5(event){
        this.value3 = event.detail.value;
        if(event.detail.value == 'Yes'){
            this.Vendorsubmittingtoclient = true;
            this.vendornotmovingforword = false;
            this.HrAgreedwithvendor = true;
            this.Interviewschedule = true;
            this.stage6 = true;
        }else if(event.detail.value == 'No'){
            this.vendornotmovingforword = true;
            this.Vendorsubmittingtoclient = false;
            this.HrAgreedwithvendor = false;
            this.Interviewschedule = false;
            this.stage6 = false;
        }
    }

    handledropstage6(event){
        this.value4 = event.detail.value;
        if(event.detail.value == 'Yes'){
            this.CTC = true;
            this.Feedbacktocandidate = false;
            this.PayrollSystem = true;
        }else if(event.detail.value == 'No'){
            this.Feedbacktocandidate = true;
            this.CTC = false;
            this.PayrollSystem = false;
        }
    }

    handleSuccess(event) {
        this.stage2btn = true;
        this.dropdownstage2 = true;
        this.recordFormstage2 = false;
        this.mainHeading = false;
        this.mainsubHeading = true;
        this.fieldId = event.detail.id;
        const evt = new ShowToastEvent({
            title: 'Record created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }

    handleCheckbox(){
        this.disabledstage1 = !this.disabledstage1;
    }

    handleClick(){
        this.stage1 = false;
        this.stage2 = true;
        this.stage2btn = false;
    }

    handleCancel1(){
        this.stage1 = true;
        this.stage2 = false;
        this.disabledstage1 = !this.disabledstage1;
    }

    handleStage3(){
        if(this.value2 == 'No'){
            const evt = new ShowToastEvent({
                title: 'Records created',
                message: 'Records inserted successfully',
                variant: 'success',
            });
            this.dispatchEvent(evt);
        }
        if(this.value4 == 'No'){
            const evt = new ShowToastEvent({
                title: 'Records created',
                message: 'Records inserted successfully',
                variant: 'success',
            });
            this.dispatchEvent(evt);
        }
        if(this.value3 == 'No'){
            const evt = new ShowToastEvent({
                title: 'Records created',
                message: 'Records inserted successfully',
                variant: 'success',
            });
            this.dispatchEvent(evt);
        }
        if(this.value4 == 'Yes'){
            const evt = new ShowToastEvent({
                title: 'Records created',
                message: 'Records inserted successfully',
                variant: 'success',
            });
            this.dispatchEvent(evt);
        }
        this.btndisable = true;
        this.btnenable = false;
        this.btncancel = false;
    }

    handleStage4(){
        this.stage2 = false;
        this.thankyoucard = true;
    }

    handleReset() {
        const inputFields = this.template.querySelectorAll('lightning-input-field' );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
        this.value = 'select';
        this.value2 = 'select';
        this.value3 = 'select';
        this.value4 = 'select';
    }
    
}