import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewFinderPageRoutingModule } from './view-finder-routing.module';

import { ViewFinderPage } from './view-finder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewFinderPageRoutingModule
  ],
  declarations: [ViewFinderPage]
})
export class ViewFinderPageModule {}
