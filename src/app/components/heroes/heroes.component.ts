import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name:'Magneto'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
