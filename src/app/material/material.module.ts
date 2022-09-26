import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

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
]

@NgModule({
  imports: [Modules],
  exports: [Modules]
})
export class MaterialModule { }
