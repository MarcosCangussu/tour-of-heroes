import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/core/components/confirmation-dialog/confirmation-dialog.component';
import { DialogData } from 'src/app/core/models/dialog-data.model';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  displayedColoumns: string[] = ['id', 'name', 'actions'];
  heroes: Hero[] = [];

  constructor(private dialog: MatDialog, private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getAll().subscribe((heroes) => (this.heroes = heroes));
  }

  delete(hero: Hero): void {
    const dialogData: DialogData = {
      cancelText: 'Cancel',
      confirmText: 'Delete',
      content: `Are you sure you want to delete '${hero.name}'?`,
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: dialogData,
      width: '18.75rem',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.heroService.delete(hero).subscribe(() => {
          // this.heroes = this.heroes.filter((h) => h !== hero) ou
          this.getHeroes();
        });
      }
    });
  }
  onSelected(hero: Hero): void {
    this.delete(hero);
  }
}

// subscribe ser notificado quando ocorrer uma mudança
