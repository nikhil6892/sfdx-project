import { LightningElement, track, api } from 'lwc';

const columns = [
    {label: 'Name', fieldName: 'Name', editable:'true', type: 'text', sortable: true},
            {label: 'TestNumber ', fieldName: 'TestNumber__c', editable:'true', type: 'text', sortable: true},
            {label: 'Website', fieldName: 'Website', editable:'true', type: 'url'},
            {label: 'Phone', fieldName: 'Phone', editable:'true', type: 'text', sortable: true},
            {label: 'Industry', fieldName: 'Industry', editable:'true', type: 'picklist', sortable: true}];

export default class LwcDataTable extends LightningElement {
    @track columns = columns;
    @api accData;
}