import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-heroes';
import { HeroService} from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  
  heros: Hero[];
  selectedHero: Hero;
  
  /*
  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }
  */
	
  getHeros(): void{
     this.heroService.getHeros()
     .subscribe(heroArray => this.heros = heroArray);
  }

  constructor(private heroService:HeroService) 
  { 
  }

  ngOnInit() {
    this.getHeros();
  }

}
