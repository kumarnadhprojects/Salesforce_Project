import { LightningElement } from 'lwc';

export default class RenderingExample extends LightningElement {
    status = false

    handleClick(){
        this.status = !this.status
    }
}