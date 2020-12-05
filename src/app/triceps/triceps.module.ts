import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TRICEPSPageRoutingModule } from './triceps-routing.module';

import { TRICEPSPage } from './triceps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TRICEPSPageRoutingModule
  ],
  declarations: [TRICEPSPage]
})
export class TRICEPSPageModule {}
