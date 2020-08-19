import { LightningElement, wire, track } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
/* eslint-disable no-console */
/* eslint-disable no-alert */

export default class testContactCMP extends LightningElement {
@track error;
@track mapOfRCValues=[];

@wire(getContacts, {acctType: 'Prospect',industry: 'Chemicals',
mailingCountry: 'United States'})
wiredGetContacts(result) {
    var conts = result.data;
    var key;
    if (result.data) {
        //mapData = [];
        for(key in conts){
            this.mapOfRCValues.push({value:conts[key], key:key}); //Here we are creating the array to show on UI.
        }
    }
}
}