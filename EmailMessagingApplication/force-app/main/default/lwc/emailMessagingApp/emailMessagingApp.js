import { LightningElement} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getEmailDetails from '@salesforce/apex/getEmail.getEmailDetails';

export default class EmailMessagingApp extends LightningElement {
    emailName;
    handleChange(event){
        this.emailName = event.target.value;
    }

    sendEmail(){
        getEmailDetails({emailName: this.emailName})
        .then(result => {
            const event = new ShowToastEvent({
                title: 'Email',
                message: 'Email send successfully',
                variant: 'success'
            });
            this.dispatchEvent(event);
        })
        .catch(error => {
            const event = new ShowToastEvent({
                title : 'Error',
                message : 'Error for sending Email===>'+error.message,
                variant : 'error'
            });
            this.dispatchEvent(event);
        })
    }
}