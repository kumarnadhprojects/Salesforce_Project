import { LightningElement } from 'lwc';

export default class Task2 extends LightningElement {
    status;
    state_value;

    Indian_states = ['Andhra Pradesh','Haryana','Manipur','Sikkim','Arunachal Pradesh','Himachal Pradesh',
    'Meghalaya','Tamil Nadu','Assam','Jharkhand','Mizoram','Telangana','Bihar','Karnataka','Nagaland',
    'Tripura','Chhattisgarh','Kerala','Odisha','Uttarakhand','Goa','Madhya Pradesh','Punjab','Uttar Pradesh',
    'Gujarat','Maharashtra','Rajasthan','West Bengal'];

    get options() {
        return [
            { label: 'Indian states', value: 'indian' },
            { label: 'Foriegn states', value: 'foriegn' },
        ];
    }

    handleChange(event) {
        if(event.detail.value == ''){
            this.state_value='';
        }else if(event.detail.value == 'indian'){
            this.status = true;
        }else {
            this.status = false;
            this.state_value = 'Status Name : Foriegn State';
        }
    }
}