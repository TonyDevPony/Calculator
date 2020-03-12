import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractModalPage } from './contract-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ContractModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractModalPageRoutingModule {}
