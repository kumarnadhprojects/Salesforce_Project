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

    handleSubmit(event){
        event.preventDefault();
        // validations form in LWC using tost event
        const fields = event.detail.fields;
        let showError = false;
        let message = 'Please fill the following fields\n';

        if(fields.Rating == null || fields.Rating == '' || fields.Rating == undefined){
            showError = true;
            message += '\nRating';
        }
        if(fields.Industry == null || fields.Industry == '' || fields.Industry == undefined){
            showError = true;
            message += '\nIndustry';
        }
        if(showError){
            const evt = new ShowToastEvent({
                title: 'Required fields are missing!!!',
                message: message,
                variant: 'error',
            });
            this.dispatchEvent(evt);
        }else{
            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }
    }
}