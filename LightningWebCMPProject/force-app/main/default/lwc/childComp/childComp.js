import { LightningElement, track, api } from 'lwc';
/* eslint-disable no-console */
 /* eslint-disable no-alert */

export default class childComp extends LightningElement {
    @track Message;
    @api
    changeMessage(strMsg){
        console.log("Value in Child: "+strMsg);
        this.Message = strMsg.toUpperCase();
    }
}