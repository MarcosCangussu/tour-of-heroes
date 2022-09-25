import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const Components = [MessagesComponent, ToolbarComponent];
const Modules = [FlexLayoutModule, MaterialModule]

@NgModule({
  declarations: [Components],
  imports: [MaterialModule, Modules],
  exports: [Components, MaterialModule, Modules],
})
export class CoreModule {}
