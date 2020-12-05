import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PectorauxPageRoutingModule } from './pectoraux-routing.module';

import { PectorauxPage } from './pectoraux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PectorauxPageRoutingModule
  ],
  declarations: [PectorauxPage]
})
export class PectorauxPageModule {}
