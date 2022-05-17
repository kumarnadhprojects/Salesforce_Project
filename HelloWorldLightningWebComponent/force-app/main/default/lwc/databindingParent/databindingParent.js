import { LightningElement,api } from 'lwc';

export default class DatabindingParent extends LightningElement {
    @api val1;
    changefn(event){
        this.val1 = event.target.value;
    }
}