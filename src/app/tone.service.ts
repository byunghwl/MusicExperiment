import { Injectable } from '@angular/core';
import  Tone = require("tone");

@Injectable()
export class ToneService {
  synth:Tone;

 
  makeSound():void{
  	 this.synth.triggerAttackRelease('C4', '8n');
  }

  constructor() { 
  	this.synth = new Tone.Synth().toMaster();
  }

}
