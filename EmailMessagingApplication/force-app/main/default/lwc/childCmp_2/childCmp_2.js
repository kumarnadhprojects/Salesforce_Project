import { LightningElement,api } from 'lwc';

export default class ChildCmp_2 extends LightningElement {
    @api childVal;
    @api inputVal;

    handleChange(event){
        this.inputVal = event.detail.value;
    }

    handleClick(){
        this.childVal = this.inputVal;
        const eve = new CustomEvent('childtoparent',{detail:this.childVal});
        this.dispatchEvent(eve);
    }
}