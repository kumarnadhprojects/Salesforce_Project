import { LightningElement } from 'lwc';
import getAccountTree from '@salesforce/apex/TreeLWCController.getAccountTree';

export default class LightningTreeJGP extends LightningElement {
    items;
    connectedCallback(){
        getAccountTree()
        .then(result=>{
            this.items = result;
        })
        .catch(error=>{
            console.log('It Contains Error'+error);
        })
    }
}