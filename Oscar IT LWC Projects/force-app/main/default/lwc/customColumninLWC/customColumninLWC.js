import { LightningElement,track } from 'lwc';
import getAccountRecords from '@salesforce/apex/getRecordsAccountObject.getAccountRecords';
import getMapValues from '@salesforce/apex/getRecordsAccountObject.getMapValues';
import WarmLabel from '@salesforce/label/c.WarmLabel';
import HotLabel from '@salesforce/label/c.HotLabel';
import ColdLabel from '@salesforce/label/c.ColdLabel';

export default class CustomColumninLWC extends LightningElement {
    @track accList = [];
    @track accounts = [];
    @track accListMapValues = [];

    label = {
        WarmLabel,
        HotLabel,
        ColdLabel
    };

    connectedCallback(){
        getMapValues()
        .then(result=>{
            // Key loop
            for(let key in result){
                // alert('For Key Loop===>'+result[key]);
                this.accListMapValues.push({value:result[key],key:key});
            }
        })
        .catch(error=>{

        })
        
        getAccountRecords()
        .then(result=>{
            // alert('Hot Label::::'+this.label.HotLabel);
            this.accList = result;
            var accRec = [];
            this.accList.forEach(rec=>{
                var newRecord = {...rec}; //Spread Operator
                if(newRecord.Rating === this.label.HotLabel){
                    newRecord.Grade = 'A';
                }else if(newRecord.Rating === this.label.WarmLabel){
                    newRecord.Grade = 'B';
                }
                else if(newRecord.Rating === this.label.ColdLabel){
                    newRecord.Grade = 'C';
                }
                accRec.push(newRecord);
            })
            this.accounts = accRec;
        })
        .catch(error=>{
            console.log('Error ==>'+error);
        })
    }
}