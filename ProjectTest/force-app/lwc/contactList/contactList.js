import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
/* eslint-disable no-console */
/* eslint-disable no-alert */

export default class ContactList extends LightningElement {
@wire(getContactList) contacts;
/*handleSelect(event) {
console.log('Inside lwc handleSelect123');
console.log('ContactId: ' + event.currentTarget.dataset.contactId);
// 1. Prevent default behavior of anchor tag click which is to navigate to the href url
event.preventDefault();
console.log('Before Event Fired');
// 2. Create a custom event that bubbles. Read about event best practices at http://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.events_best_practices
let account1 = event.target.id;
        const list = account1.split('-');
        const v = list[0];
const selectEvent = new CustomEvent('contactselect', {
detail: { contactId: v }
});
// 3. Fire the custom event
this.dispatchEvent(selectEvent);
console.log('Event Fired');
}*/
}