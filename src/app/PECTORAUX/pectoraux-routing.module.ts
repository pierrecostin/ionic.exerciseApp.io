import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PectorauxPage } from './pectoraux.page';

const routes: Routes = [
  {
    path: '',
    component: PectorauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PectorauxPageRoutingModule {}
