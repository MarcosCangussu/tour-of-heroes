import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  @Input()
  hero?: Hero

}

//@Input() - é utilizado para passar uma informação de um componente "pai" para um componente "filho".
//@Output() é utilizado para passar uma informação de um componente "filho" para um componente "pai".
