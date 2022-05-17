import { LightningElement } from 'lwc';
import BOOK_OBJECT from '@salesforce/schema/book__c'
import NAME_FIELD from '@salesforce/schema/book__c.Name'
import AUTHOR_FIELD from '@salesforce/schema/book__c.author_name__c'
import PRICE_FIELD from '@salesforce/schema/book__c.price__c'
import EDITION_FIELD from '@salesforce/schema/book__c.edition__c'

export default class RecordEditForm extends LightningElement {
    objectName = BOOK_OBJECT;
    fields = {
                authorField : AUTHOR_FIELD,
                nameField : NAME_FIELD,
                priceField : PRICE_FIELD,
                editionField : EDITION_FIELD
              }
}