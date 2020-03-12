import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractModalPageRoutingModule } from './contract-modal-routing.module';

import { ContractModalPage } from './contract-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractModalPageRoutingModule
  ],
  declarations: [ContractModalPage]
})
export class ContractModalPageModule {}
