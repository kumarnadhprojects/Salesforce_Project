import { LightningElement } from 'lwc';
import { loadScript,loadStyle } from 'lightning/platformResourceLoader';
import J_Query from '@salesforce/resourceUrl/J_Query';
import jquery_validate from '@salesforce/resourceUrl/jquery_validate';

export default class JqueryValidationsInLWC extends LightningElement {
    // Submit Functionality
      handleSubmit(){    
            let firstName = this.template.querySelector('.firstName');
            let lastName = this.template.querySelector('.lastName');
            let userEmail = this.template.querySelector('.userEmail');
            let userPhone = this.template.querySelector('.userPhone');
            let statusCheckbox = this.template.querySelector('.statusActive');
            let firstNameVal = firstName.value;
            let lastNameVal = lastName.value;
            let userEmailVal = userEmail.value;
            let userPhoneVal = userPhone.value;
            let statusCheckboxVal = statusCheckbox.checked;

            if(!firstNameVal){
                firstName.setCustomValidity('Please Enter the First Name');
            }else{
                firstName.setCustomValidity('');
            }
       
            if(!lastNameVal){
                lastName.setCustomValidity('Please Enter the Larst Name');
            }else{
                lastName.setCustomValidity('');
            }
    
            if(!userEmailVal){
                userEmail.setCustomValidity('Please Enter the Email Id');
            }else{
                userEmail.setCustomValidity('');
            }
            
            if(!userPhoneVal){
                userPhone.setCustomValidity('Please Enter the Email Id');
            }else{
                userPhone.setCustomValidity('');
            }
    
            if(!statusCheckboxVal){
                statusCheckbox.setCustomValidity('Please Check Mark the Status Checkbox');
            }else{
                statusCheckbox.setCustomValidity('');
            }

            firstName.reportValidity();
            lastName.reportValidity();
            userEmail.reportValidity();
            userPhone.reportValidity();
            statusCheckbox.reportValidity();
        }

        // JQuery plugin
        renderedCallback(){
            loadScript(this, J_Query),
            loadScript(this, jquery_validate)
            .then(() => {
                console.log('JQuery loaded.');
            })
            .catch(error=>{
                console.log('Failed to load the JQuery : ' +error);
            });
        }
        slideIt(event){
            $(this.template.querySelector('.panel')).slideToggle("slow");
        }

        slideRight(event){
            $(this.template.querySelector('.innerDiv')).animate({left: '275px'});
        }
        
}