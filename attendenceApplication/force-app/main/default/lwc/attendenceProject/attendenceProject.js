import { LightningElement,wire} from 'lwc';
import getAttendence from '@salesforce/apex/retriveAttendenceData.getAttendence';

const column =[
    {label:'Student name',fieldName:'Name'},
    {label:'Batch Name',fieldName:'Batches'},
    {label:'Present / Absent',fieldName:'Present_Absent__c',type:'text'},
    {label:'Date',fieldName:'Date__c',type:'Date'},
];

export default class AttendenceProject extends LightningElement {
    status;
    Batch;
    fromDate;
    toDate;
    studentName;
    records;
    error;
    columnTable = column;

    get options() {
        return [
            { label: 'Batch1', value: 'Batch1' },
            { label: 'Batch2', value: 'Batch2' },
            { label: 'Batch3', value: 'Batch3' },
            { label: 'Batch4', value: 'Batch4' },
        ];
    }

    handleChange(event) {
        this.Batch = event.detail.value;
    }

    inp1(event){
        this.fromDate = event.target.value;
    }

    inp2(event){
        this.toDate = event.target.value;
    }

    inp3(event){
        this.studentName = event.target.value;
    }

    @wire(getAttendence, { studentName: '$studentName',Batch: '$Batch',fromDate: '$fromDate',toDate: '$toDate' })  
    wiredAccount(value) {
        this.wiredRecords = value;
        const { data, error } = value;
        if (data) {
            this.status = true;
            let tempRecords = JSON.parse( JSON.stringify( data ) );
            tempRecords = tempRecords.map( row => {
                return { ...row, Name: row.Student_Name__r.Name, Batches: row.Student_Name__r.Batches__c };
            })
            this.records = tempRecords;
            this.error = undefined;
        } else if ( error ) {
            this.error = error;
            this.records = undefined;
        }

    }
}