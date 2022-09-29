import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;
  isEditing = false;

  form = this.fb.group({
    id: [{ value: 0, disabled: true }],
    name: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private snackbar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.getOne();
  }
  getOne(): void {
    const paramId = this.route.snapshot.paramMap.get('id');

    if (paramId !== 'new') {
      this.isEditing = true;
      const id = Number(paramId);
      this.heroService.getOne(id).subscribe((hero) => {
        this.hero = hero;
        this.form.controls['id'].setValue(hero.id);
        this.form.controls['name'].setValue(hero.name);
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

  create(): void {
    const { valid, value } = this.form;

    if (valid) {
      const hero: Hero = {
        name: value.name,
      } as Hero;
      this.heroService.create(hero).subscribe(() => this.goBack());
    }else {
      this.showErroMsg();
    }
  }

  update(): void {
    const { valid, value } = this.form;

    if (valid) {
      const hero: Hero = {
        id: this.hero.id,
        name: value.name!,
      }
      this.heroService.update(hero).subscribe(() => this.goBack());
    } else {
      this.showErroMsg();
    }
  }

  private showErroMsg(): void {
    this.snackbar.open('Please check the error found.', 'Ok', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
    })
  }
}

//@Input() - é utilizado para passar uma informação de um componente "pai" para um componente "filho".
//@Output() é utilizado para passar uma informação de um componente "filho" para um componente "pai".
