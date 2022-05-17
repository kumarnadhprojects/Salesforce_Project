import { LightningElement,track } from 'lwc';

export default class ParentCmp_1 extends LightningElement {
    @track parentVal;
    @track inputValue;

    handleInput(event){
        this.inputValue = event.detail.value;
    }

    handleClickParent(){
        this.parentVal = this.inputValue;
    }
}