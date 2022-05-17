import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {
    
    constructor(){
        super()//First line is always super, its call to parent constructor
        console.log("parent constructor called");
    }
    connectedCallback(){
        console.log("parent connectedCallback called");
    }
    renderedCallback(){
        console.log("parent renderedCallback called");
    }
    status = false
    message = 'Good Bye';
    
    changeStatus(){
        this.status = !this.status
    }
    
}