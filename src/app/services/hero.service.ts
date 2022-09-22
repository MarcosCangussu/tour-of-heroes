import { Injectable } from '@angular/core';
import { Hero } from '../hero.model';
import { Heroes } from '../mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return Heroes;
  }
}
