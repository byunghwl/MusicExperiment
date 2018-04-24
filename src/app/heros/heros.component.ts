import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-heroes';
import { HeroService} from '../hero.service';
import { ToneService } from '../tone.service';

declare var $: any;
declare var Interface: any;


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {
  
  heros: Hero[];
  selectedHero: Hero;
  KeyboardObj: any;
  /*
  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }
  */
	makeSound(): void{
     this.tone.makeSound();
  }

  getHeros(): void{
     this.heroService.getHeros()
     .subscribe(heroArray => this.heros = heroArray);
  }

  constructor(private heroService:HeroService, private tone:ToneService){}

  ngOnInit() {
    this.getHeros();

    $('button').click(function(){
      console.log("clicked");
    });

    this.KeyboardObj =Interface.Keyboard(); 

    var that = this;
    this.KeyboardObj.keyDown = function (note) {
        that.tone.triggerNote(note);
    };

  }

}
