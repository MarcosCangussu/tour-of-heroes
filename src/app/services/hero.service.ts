import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../hero.model';
import { Heroes } from '../mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable <Hero[]> {
    const heroes = of(Heroes)

    return heroes;
  }
}

// Observable emite notificações sempre que ocorre uma mudança em um de seus itens e a partir disto podemos executar uma ação.
