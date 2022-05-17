import { LightningElement,track } from 'lwc';
import getStudentCertificateDetails from '@salesforce/apex/getStudentCertificate.getStudentCertificateDetails'

export default class StudentCertificateDetailsUsingWrapperClass extends LightningElement {
    @track isLoading = true;
    @track stulist = [];

    @track columns = [
        { label: 'Id', fieldName: 'Id' , type: 'text'},
        { label: 'Student Name', fieldName: 'StudentName', type: 'text' },
        { label: 'Certificate Name', fieldName: 'CertificateName' , type: 'text'},
        { label: 'Designation Of Course', fieldName: 'DesignationOfCourse', type: 'text' },
        { label: 'Issue Date', fieldName: 'IssueDate', type: 'text' },
    ];

    columnHeader = ['ID', 'StudentName', 'CertificateName', 'DesignationOfCourse' ,'IssueDate']

    connectedCallback(){
        getStudentCertificateDetails()
        .then(result=> {
            this.stulist = result;
            alert('Certificate Details'+JSON.stringify(this.stulist));
            this.isLoading = false;
        })
        .catch(error=>{
            this.isLoading = false;
            console.log('Error'+JSON.stringify(error));
        })
    }

    exportStudentData(){
        // Prepare a html table
        let doc = '<table>';
        // Add styles for the table
        doc += '<style>';
        doc += 'table, th, td {';
        doc += '    border: 1px solid black;';
        doc += '    border-collapse: collapse;';
        doc += '}';          
        doc += '</style>';
        // Add all the Table Headers
        doc += '<tr>';
        this.columnHeader.forEach(element => {            
            doc += '<th>'+ element +'</th>'           
        });
        doc += '</tr>';
        // Add the data rows
        this.stulist.forEach(record => {
            doc += '<tr>';
            doc += '<th>'+record.Id+'</th>'; 
            doc += '<th>'+record.StudentName+'</th>'; 
            doc += '<th>'+record.CertificateName+'</th>';
            doc += '<th>'+record.DesignationOfCourse+'</th>';
            doc += '<th>'+record.IssueDate+'</th>';
            doc += '</tr>';
        });
        doc += '</table>';
        var element = 'data:application/vnd.ms-excel,' + encodeURIComponent(doc);
        let downloadElement = document.createElement('a');
        downloadElement.href = element;
        downloadElement.target = '_self';
        // use .csv as extension on below line if you want to export data as csv
        downloadElement.download = 'Student Certificate Details.xls';
        document.body.appendChild(downloadElement);
        downloadElement.click();
    }
}