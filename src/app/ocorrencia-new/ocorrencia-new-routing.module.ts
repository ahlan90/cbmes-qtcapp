import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcorrenciaNewPage } from './ocorrencia-new.page';

const routes: Routes = [
  {
    path: '',
    component: OcorrenciaNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcorrenciaNewPageRoutingModule {}
