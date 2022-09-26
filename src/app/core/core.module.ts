import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

const Components = [MessagesComponent, ToolbarComponent];
const Modules = [FlexLayoutModule, MaterialModule, RouterModule]

@NgModule({
  declarations: [Components],
  imports: [CommonModule, Modules],
  exports: [Components, MaterialModule, Modules],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('coreModule has already been loaded. Import this module in the appModule');
    }
  }
}
