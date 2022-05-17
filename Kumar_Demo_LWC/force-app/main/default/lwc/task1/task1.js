import { LightningElement } from 'lwc';

export default class Task1 extends LightningElement {
    value;
    status;

    handleinp(event){
        if(event.target.value == ''){
            this.value = '';
        }
        else if(event.target.value % 2 == 0) {
            this.value = "Even number";
            this.status = true;
        }
        
        // if the number is odd
        else {
            this.value = "Odd number";
            this.status = false;
        }
    }
}