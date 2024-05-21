import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TopBarIconsComponent } from '../top-bar-icons/top-bar-icons.component';
import { EditIconsComponent } from '../edit-icons/edit-icons.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, TopBarIconsComponent, EditIconsComponent],
  exports: [TopBarIconsComponent, EditIconsComponent],
})
export class HomePageModule {}
