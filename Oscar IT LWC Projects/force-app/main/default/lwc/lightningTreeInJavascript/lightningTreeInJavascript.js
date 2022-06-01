import { LightningElement,track } from 'lwc';
import accountConTree from '@salesforce/apex/TreeLWCController.accountConTree';

export default class LightningTreeInJavascript extends LightningElement {
    
@track AccTree = [];
@track TreeDummy = 

   [
  {label: 'Account One',
   name: '1',
   expanded: false,
   items:[
    {label: 'Contact One',
    name: '1',
    expanded: true },{
    label: 'Contact two',
   name: '1',
   expanded: true
    }
   ]
   },
   {label: 'Account Two',
   name: '1',
   expanded: true,
   items:[{label: 'Contact One',
   name: '1',
   expanded: true,
   items : [{
    label: 'Child Contact One',
    name: '1',
    expanded: true

   }]}]
   },
   {label: 'Account Three',
   name: '1',
   expanded: true,
   items:[{label: 'Contact One',
   name: '1',
   expanded: true},{label: 'Contact Two',
   name: '1',
   expanded: true}]

   }];


  connectedCallback(){
    accountConTree()
    .then(result=>{
         var accCon = [];
          var item1 = [];
          item1 = result;
        
          item1.forEach(rec=>{
          var cons = rec.conlist;
          var itemcon = [];
          cons.forEach(rec=>{
              var eachcon = {label:rec.LastName,
                             name:1,
                             expanded: false};
            itemcon.push(eachcon);
          });
          var eachacc = {label:rec.AccName,
            name:1,
            expanded: false,
            items : itemcon
           };
            accCon.push(eachacc);     

          })
    this.AccTree = accCon;

    })
    .catch(error=>{

    })

  }
}