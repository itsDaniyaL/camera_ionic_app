import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewFinderPage } from './view-finder.page';

const routes: Routes = [
  {
    path: '',
    component: ViewFinderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewFinderPageRoutingModule {}
