import { LightningElement } from 'lwc';
/* eslint-disable no-console */
 /* eslint-disable no-alert */
export default class parentComponent extends LightningElement {
    handleChangeEvent(event){
        console.log("Value in Parent: "+event.target.value);
        this.template.querySelector('c-child-Comp').changeMessage(event.target.value);
    }
}