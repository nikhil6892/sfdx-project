import { LightningElement, track } from 'lwc';

export default class parentCMPEvent extends LightningElement {
    @track
    msg;

    /*handleCustomEvent(event){
        const textVal = event.detail;
        this.msg = textVal;
    }*/
    constructor(){
        super();
        this.template.addEventListener('mycustomevent',this.handleCustomEvent.bind(this));
    }
    handleCustomEvent(event){
        const textVal = event.detail;
        this.msg = textVal;
    }
}