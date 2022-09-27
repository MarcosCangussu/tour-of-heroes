import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../models/hero.model';
import { LoadingService } from './loading.service';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = `${environment.baseUrl}/heroes`;

  constructor(
    private http: HttpClient,
    private messagesService: MessagesService
  ) {}

  //GET /heroes
  getAll(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap((heroes) => this.log(`fetched ${heroes.length} heroes`)));
  }

  //GET /heroes/id
  getOne(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(tap((hero) => this.log(`fetched hero id=${id} and ${hero.name}`)));
  }

  //PUT /heroes/id
  update(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.heroesUrl}/${hero.id}`, hero).pipe(
      tap((hero) => this.log(`updated hero id=${hero.id} and ${hero.name}`)));
  }

  private log(message: string): void {
    this.messagesService.add(`HeroService: ${message}`);
  }
}

// GET: obter dados
// POST: criar dados
// PUT/PATCH: atualizar dados
// DELETE: excluir dados

// Observable emite notificações sempre que ocorre uma mudança em um de seus itens e a partir disto podemos executar uma ação.
