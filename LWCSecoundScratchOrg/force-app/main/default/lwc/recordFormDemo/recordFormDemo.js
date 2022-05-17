import { LightningElement} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import BOOK_OBJECT from '@salesforce/schema/book__c';
import BOOKNAME_FIELD from '@salesforce/schema/book__c.Name';
import AUTHOR_FIELD from '@salesforce/schema/book__c.author_name__c';
import PRICE_FIELD from '@salesforce/schema/book__c.price__c';
import EDITION_FIELD from '@salesforce/schema/book__c.edition__c';

export default class RecordFormDemo extends LightningElement {
    objectApiName = BOOK_OBJECT;
    fields = [BOOKNAME_FIELD, AUTHOR_FIELD, PRICE_FIELD, EDITION_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Book Created Successfully",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}