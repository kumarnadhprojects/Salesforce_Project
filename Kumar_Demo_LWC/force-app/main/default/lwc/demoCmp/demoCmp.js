import { LightningElement } from 'lwc';

export default class DemoCmp extends LightningElement {
    name = "Welcome to LWC";
    num1 = 25
    num2 = 26
    
    get product(){
        return this.num1 * this.num2
    }

    get sum(){
        return this.num1 + this.num2
    }

    get difference(){
        return this.num1 - this.num2
    }

    get division(){
        return this.num1 / this.num2
    }
}