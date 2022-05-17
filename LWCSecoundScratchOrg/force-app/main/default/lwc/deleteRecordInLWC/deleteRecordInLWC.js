import { LightningElement,wire} from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
// import displayAccounts from '@salesforce/apex/LWCExampleController.displayAccounts';

export default class DeleteRecordInLWC extends LightningElement {
    currentRecordId;
    error;
    // @wire(displayAccounts) accounts;
    handleChange(event){
        this.currentRecordId=event.target.value;
        // console.log('@@@current RecordId@@@'+this.currentRecordId);
    }
    handleDelete(){
        deleteRecord(this.currentRecordId)
        .then(() => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Record deleted successfully',
                    variant: 'success'
                })
            );
            return refreshApex(this.accounts);
        })
        .catch((error) => {
           this.error=error;
           this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error',
                message: 'Could not delete this record',
                variant: 'error'
            })
        );
           console.log('unable to delete the record due to'+JSON.stringify(this.error));
        });
    }
}