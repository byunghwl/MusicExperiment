import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROS } from './mock-heroes';

import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  getHeros(): Observable<Hero[]> {
  	this.messageService.add('HeroService: fetched heroes');
  	return of(HEROS);
  }

  getHero(id:number): Observable<Hero>{
  		this.messageService.add(`HeroService: fetched hero id=${id}`);
  		return of(HEROS.find(hero=> hero.id === id));
  }

  constructor(private messageService: MessageService) {}
}
