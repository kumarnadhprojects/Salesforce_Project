import { LightningElement,track } from 'lwc';

export default class ParentCmp_2 extends LightningElement {
    @track parentVal;

    handleChildValue(event){
        this.parentVal = event.detail;
    }
}