import { LightningElement } from 'lwc';

export default class ConnectedCallbackFunctionality extends LightningElement {
    modeldisp = true;
    connectedCallback(){
        alert('Load called');
    }

    handleClose(){
        this.modeldisp = false;
    }
}