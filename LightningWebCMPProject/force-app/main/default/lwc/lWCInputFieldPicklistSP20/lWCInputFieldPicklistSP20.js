import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

/* eslint-disable no-console */
 /* eslint-disable no-alert */
 
export default class LWCInputFieldPicklistSP20 extends LightningElement {

    handleSuccess(event) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: event.detail.apiName + ' created.',
                variant: 'success',
            }),
        );
    }

    handleChange(event) {
        console.log("You selected an account: " + event.detail.value[0]);
    }

}