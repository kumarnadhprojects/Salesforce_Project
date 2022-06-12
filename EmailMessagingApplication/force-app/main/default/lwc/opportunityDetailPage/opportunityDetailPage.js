import { LightningElement,api,track} from 'lwc';
import getOpportunitymethodDetails from '@salesforce/apex/getOpportunityChildDetails.getOpportunitymethodDetails';

export default class OpportunityDetailPage extends LightningElement {
    @api recordId;
    @track parentRecordId;
    @track renderCatchValue;
    @track selectedStep;
    opportunityCard = false;
    stage1 = false;
    stage2 = false;
    stage3 = false;
    stage4 = false;

    connectedCallback(){
        // Passing parent record ID
        this.parentRecordId = this.recordId;
        // Imperative Call
        getOpportunitymethodDetails({UserId: this.recordId})
        .then(result=>{
            if(result == 'Asset Details'){
                this.opportunityCard = true;
                this.stage1 = true;
                this.selectedStep = 'Step1';
            }else if(result == 'Income Details'){
                this.opportunityCard = true;
                this.stage2 = true;
                this.selectedStep = 'Step2';
            }else if(result == 'Loan Application Details'){
                this.opportunityCard = true;
                this.stage3 = true;
                this.selectedStep = 'Step3';
            }else if(result == 'Final Terms'){
                this.opportunityCard = true;
                this.stage4 = true;
                this.selectedStep = 'Step4';
            }
        })
        .catch(error=>{
            alert(JSON.stringify(error));
        })
    }

    handleRender(event){
        this.renderCatchValue = event.detail;
        if(this.renderCatchValue == 'Step1'){
            this.opportunityCard = true;
            this.stage1 = false;
            this.stage2 = true;
            // Steps in progress bar
            this.selectedStep = event.detail;
            var getselectedStep = event.detail;
            if(getselectedStep === 'Step1'){
                this.selectedStep = 'Step2';
            }
        }else if(this.renderCatchValue == 'Step2'){
            this.opportunityCard = true;
            this.stage1 = false;
            this.stage2 = false;
            this.stage3 = true;
            // Steps in progress bar
            this.selectedStep = event.detail;
            var getselectedStep = event.detail;
            if(getselectedStep === 'Step2'){
                this.selectedStep = 'Step3';
            }
        }else if(this.renderCatchValue == 'Step3'){
            this.opportunityCard = true;
            this.stage1 = false;
            this.stage2 = false;
            this.stage3 = false;
            this.stage4 = true;
            // Steps in progress bar
            this.selectedStep = event.detail;
            var getselectedStep = event.detail;
            if(getselectedStep === 'Step3'){
                this.selectedStep = 'Step4';
            }
        }else if(this.renderCatchValue == 'Step4'){
            this.opportunityCard = true;
            this.stage1 = false;
            this.stage2 = false;
            this.stage3 = false;
            this.stage4 = true;
            // Steps in progress bar
            this.selectedStep = event.detail;
            var getselectedStep = event.detail;
            if(getselectedStep === 'Step4'){
                // this.selectedStep = 'Step4';
                this.selectStep4();
            }
        }
    }

    handle_Cancel(event){
        var getselectedStep = event.detail;
        if(getselectedStep === 'Step2'){
            this.selectedStep = 'Step1';
            this.stage1 = true;
            this.stage2 = false;
        }
        else if(getselectedStep === 'Step3'){
            this.selectedStep = 'Step2';
            this.stage2 = true;
            this.stage3 = false;
        }
        else if(getselectedStep === 'Step4'){
            this.selectedStep = 'Step3';
            this.stage3 = true;
            this.stage4 = false;
        }
    }
      
    selectStep1() {
        this.selectedStep = 'Step1';
    }
 
    selectStep2() {
        this.selectedStep = 'Step2';
    }
 
    selectStep3() {
        this.selectedStep = 'Step3';
    }
 
    selectStep4() {
        this.selectedStep = 'Step4';
    }

    handleAssetClick(event){
        if(event.target.value == 'Step1'){
            this.opportunityCard = true;
            this.stage1 = true;
            this.stage2 = false;
            this.stage3 = false;
            this.stage4 = false;
        }else if(event.target.value == 'Step2'){
            this.opportunityCard = true;
            this.stage1 = false;
            this.stage2 = true;
            this.stage3 = false;
            this.stage4 = false;
        }else if(event.target.value == 'Step3'){
            this.opportunityCard = true;
            this.stage1 = false;
            this.stage2 = false;
            this.stage3 = true;
            this.stage4 = false;
        }else if(event.target.value == 'Step4'){
            this.opportunityCard = true;
            this.stage1 = false;
            this.stage2 = false;
            this.stage3 = false;
            this.stage4 = true;
        }
    }
}