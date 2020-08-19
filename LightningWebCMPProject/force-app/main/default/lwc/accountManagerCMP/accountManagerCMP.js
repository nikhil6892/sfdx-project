import { LightningElement, wire, track } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManager.getAccountList'
import searchAccounts from '@salesforce/apex/AccountManager.searchAccounts'
/* eslint-disable no-console */
 /* eslint-disable no-alert */
 // eslint-disable-next-line @lwc/lwc/no-async-operation
const DELAY = 350;
export default class AccountManagerCMP extends LightningElement {
    @track accounts1;
    @track resultAccounts;
    @track error;
    // Call Apex methods from LWC using Wire a property
    @wire(getAllAccounts) accounts;

    // Call Apex methods from LWC using Wire a function
    @wire(searchAccounts,{searchKey:'Nikhil'}) wiredAccounts({data, error}){
        if(data){
            this.accounts1 = data;
            this.error = undefined;
        }
        else if (error) {
            this.error = error;
            this.accounts1 = undefined;
        }
    }

    handleKeyChange(event) {
        const searchKey = event.target.value;
        // Call Apex methods from LWC using Call a method imperatively
        this.delayTimeout = setTimeout(() => {
            searchAccounts({ searchKey })
                .then(result => {
                    this.resultAccounts = result;
                    this.error = undefined;
                })
                .catch(error => {
                    this.error = error;
                    this.resultAccounts = undefined;
                });
            }, DELAY);
            
    }



    
    /*handleItemClicked(event) {
        let account1 = event.target.id;
        const list = account1.split('-');
        const v = list[0];
        console.log(event.target.id);
        const textChangeEvent = new CustomEvent('txtChange',{
            detail : {AccountId: v},
        });

        //Fire Event
        this.dispatchEvent(textChangeEvent);
    }
    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;   
    }*/
    
}