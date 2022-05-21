import { LightningElement,track } from 'lwc';
import getStudentMarks from '@salesforce/apex/getRecordsAccountObject.getStudentMarks';

export default class StudentCustomColumnLWC extends LightningElement {
    @track studentList;
    @track studentsDetails;

    connectedCallback(){
        getStudentMarks()
        .then(result=>{
            this.studentList = result;
            var stuRecArray = [];
            this.studentList.forEach(stud => {
                var studentNewRec = {...stud};
                if(studentNewRec.Marks__c >= 450){
                    studentNewRec.Grade = 'A';
                }else if(studentNewRec.Marks__c >= 350){
                    studentNewRec.Grade = 'B';
                }else if(studentNewRec.Marks__c < 350){
                    studentNewRec.Grade = 'C';
                }
                stuRecArray.push(studentNewRec);
            });
            this.studentsDetails = stuRecArray;
        })
        .catch(error=>{
            console.log('An Error Occured'+error);
        })
    }
}