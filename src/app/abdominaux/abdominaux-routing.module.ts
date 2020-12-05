import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ABDOMINAUXPage } from './abdominaux.page';

const routes: Routes = [
  {
    path: '',
    component: ABDOMINAUXPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ABDOMINAUXPageRoutingModule {}
