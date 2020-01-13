import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcorrenciaUpdatePage } from './ocorrencia-update.page';

const routes: Routes = [
  {
    path: '',
    component: OcorrenciaUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcorrenciaUpdatePageRoutingModule {}
