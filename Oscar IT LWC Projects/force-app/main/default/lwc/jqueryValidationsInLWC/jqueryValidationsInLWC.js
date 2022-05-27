import { LightningElement } from 'lwc';

export default class JqueryValidationsInLWC extends LightningElement {
    //   Submit Functionality
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
}