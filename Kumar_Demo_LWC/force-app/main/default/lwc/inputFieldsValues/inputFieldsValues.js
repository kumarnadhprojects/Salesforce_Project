import { LightningElement } from 'lwc';

export default class InputFieldsValues extends LightningElement {
    name;
    age;
    phone;
    doj;
    email;

    handleName(event){
        this.name = event.target.value;
    }

    handleAge(event){
        this.age = event.target.value;
    }

    handlePhone(event){
        this.phone = event.target.value;
    }

    handleDOJ(event){
        this.doj = event.target.value;
    }

    handleEmail(event){
        this.email = event.target.value;
    }
}