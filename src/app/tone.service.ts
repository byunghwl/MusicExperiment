import { Injectable } from '@angular/core';
import * as Tone from "tone";

@Injectable()
export class ToneService {
  synth:any;
  
 
  makeSound():void{
  	 this.synth.triggerAttackRelease('C4', '8n');
  }


  triggerNote(note:string):void{
  	 this.synth.triggerAttackRelease(note, '8n');
  }

  constructor() { 
  	this.synth = new Tone.Synth({
			"oscillator" : {
				"type" : "amtriangle",
				"harmonicity" : 0.5,
				"modulationType" : "sine"
			},
			"envelope" : {
				"attackCurve" : 'exponential',
				"attack" : 0.05,
				"decay" : 0.2,
				"sustain" : 0.2,
				"release" : 1.5,
			},
			"portamento" : 0.05
		}).toMaster();
  }

}
