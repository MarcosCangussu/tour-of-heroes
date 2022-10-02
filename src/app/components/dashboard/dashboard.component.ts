import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.heroService
      .getAll()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }

  onSelected(hero: Hero): void {
    this.router.navigate(['/heroes', hero.id]);
  }
}
