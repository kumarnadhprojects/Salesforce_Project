import { LightningElement } from 'lwc';

export default class FirstCmp extends LightningElement {
    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }
}