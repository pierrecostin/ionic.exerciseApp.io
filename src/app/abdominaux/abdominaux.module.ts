import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ABDOMINAUXPageRoutingModule } from './abdominaux-routing.module';

import { ABDOMINAUXPage } from './abdominaux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ABDOMINAUXPageRoutingModule
  ],
  declarations: [ABDOMINAUXPage]
})
export class ABDOMINAUXPageModule {}
