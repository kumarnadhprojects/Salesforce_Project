import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {createRecord} from 'lightning/uiRecordApi';
import {NavigationMixin} from 'lightning/navigation';
import BOOK_OBJECT from '@salesforce/schema/book__c';
import NAME_FIELD from '@salesforce/schema/book__c.Name';
import AUTHORNAME_FIELD from '@salesforce/schema/book__c.author_name__c';
import EDITION_FIELD from '@salesforce/schema/book__c.edition__c';
import PRICE_FIELD from '@salesforce/schema/book__c.price__c';

export default class CustomCreateRecordUirecordApi extends NavigationMixin(LightningElement) {
    name;
    authorname;
    edition;
    price;
    bookId;

    handleChange(event){
        if(event.target.label=='Name'){
            this.name=event.target.value;
        }
        if(event.target.label=='AuthorName'){
            this.authorname=event.target.value;
        }
        if(event.target.label=='Edition'){
            this.edition=event.target.value;
        }
        if(event.target.label=='Price'){
            this.price=event.target.value;
        }
    }
    handleClick(){
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;
        fields[AUTHORNAME_FIELD.fieldApiName] = this.authorname;
        fields[EDITION_FIELD.fieldApiName] = this.edition;
        fields[PRICE_FIELD.fieldApiName] = this.price;
        const recordInput = {apiName: BOOK_OBJECT.objectApiName, fields};
        createRecord(recordInput)
            .then(book=> {
                this.bookId = book.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Book created',
                        variant: 'success',
                    }),
                );
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: this.bookId,
                        objectApiName: 'book__c',
                        actionName: 'view'
                    },
                 });
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: 'Could not create Record!'+ error.message,
                        variant: 'error',
                    }),
                );
            });
    }
}