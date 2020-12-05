import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TRICEPSPage } from './triceps.page';

const routes: Routes = [
  {
    path: '',
    component: TRICEPSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TRICEPSPageRoutingModule {}
