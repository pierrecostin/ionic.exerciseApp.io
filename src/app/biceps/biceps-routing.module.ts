import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BICEPSPage } from './biceps.page';

const routes: Routes = [
  {
    path: '',
    component: BICEPSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BICEPSPageRoutingModule {}
