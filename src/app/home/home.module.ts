import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TopBarIconsComponent } from '../top-bar-icons/top-bar-icons.component';
import { EditIconsComponent } from '../edit-icons/edit-icons.component';
import { CanvasSectionComponent } from '../canvas-section/canvas-section.component';
import { AdjustSectionComponent } from '../adjust-section/adjust-section.component';
import { AcceptRejectButtonComponent } from '../accept-reject-button/accept-reject-button.component';
import { EffectsSliderComponent } from '../effects-slider/effects-slider.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [EffectsSliderComponent, HomePage, TopBarIconsComponent, EditIconsComponent, CanvasSectionComponent, AdjustSectionComponent, AcceptRejectButtonComponent],
  exports: [EffectsSliderComponent, TopBarIconsComponent, EditIconsComponent, CanvasSectionComponent, AdjustSectionComponent, AcceptRejectButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule { }
