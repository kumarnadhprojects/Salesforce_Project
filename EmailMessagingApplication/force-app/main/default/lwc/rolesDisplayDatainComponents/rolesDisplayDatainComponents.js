import { LightningElement } from 'lwc';
import getUserRoleDetails from '@salesforce/apex/getUserRole.getUserRoleDetails';

export default class RolesDisplayDatainComponents extends LightningElement {
    be = true;
    beLead = true;
    connectedCallback(){
        getUserRoleDetails()
        .then(result=>{
            alert('Role name==>'+result);
            if(result == 'BE'){
                this.be = false;
            }else if(result == 'BE LEAD'){
                this.beLead = false;
            }
        })
        .catch(error=>{
            alert('Error occured==>'+JSON.stringify(error));
        })
    }
}