import { LightningElement,api,track} from 'lwc';
import getOpportunitymethodDetails from '@salesforce/apex/getOpportunityChildDetails.getOpportunitymethodDetails';

export default class OpportunityDetailPage extends LightningElement {
    @api recordId;
    @track parentRecordId;
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
            }else if(result == 'Income Details'){
                this.opportunityCard = true;
                this.stage2 = true;
            }else if(result == 'Loan Application Details'){
                this.opportunityCard = true;
                this.stage3 = true;
            }else if(result == 'Final Terms'){
                this.opportunityCard = true;
                this.stage4 = true;
            }
        })
        .catch(error=>{
            alert(error);
        })
    }
}