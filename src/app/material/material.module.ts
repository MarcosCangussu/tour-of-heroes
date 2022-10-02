import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



const Modules = [
  MatToolbarModule,
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatTooltipModule,
  MatCardModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatDialogModule,
  MatAutocompleteModule
];

@NgModule({
  imports: [Modules],
  exports: [Modules],
})
export class MaterialModule {}
