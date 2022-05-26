import { LightningElement,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class LightningRecordEditFormJGP extends  NavigationMixin(LightningElement){
    @track accid;

    handleSuccess(event){

        const evt = new ShowToastEvent({
            title: 'Record status',
            message: "Record Created successfully",
            variant: 'success',
        });
        this.dispatchEvent(evt);

        this.accid =  event.detail.id;

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.accid,
                objectApiName: 'Account',
                actionName: 'view'
            },
        });

      
    }
    handleReset() {
        const inputFields = this.template.querySelectorAll('lightning-input-field' );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
    }
}