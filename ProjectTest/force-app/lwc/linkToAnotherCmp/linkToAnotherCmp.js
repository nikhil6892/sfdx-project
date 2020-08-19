import { LightningElement } from 'lwc';

export default class LinkToAnotherCmp extends LightningElement {
    
    raiseEvent(){
        //let txtInput = this.template.querySelector(".txtInput");
        const v = 'Test';
        const textChangeEvent = new CustomEvent('txtChange',{
            detail : {v},
        });

        //Fire Event
        this.dispatchEvent(textChangeEvent);
    }
}