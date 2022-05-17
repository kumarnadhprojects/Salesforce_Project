import { LightningElement } from 'lwc';

export default class LoopsExample extends LightningElement {
    movies_names = ['RRR','Radhe Syam','KGF2','Puspa'];
    employees = [
        {
            id: 101,
            name: 'Kumar',
            desg : 'Developer'
        },
        {
            id: 102,
            name: 'Hari',
            desg : 'Testing'
        },
        {
            id: 103,
            name: 'Babu',
            desg : 'Analyst'
        },
        {
            id: 103,
            name: 'Sai',
            desg : 'Accountant'
        }
    ]
}