import { OcorrenciaSharedModule } from './../shared/ocorrencia-shared/ocorrencia-shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OcorrenciaListPage } from './ocorrencia-list.page';

@NgModule({
  imports: [
    OcorrenciaSharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: OcorrenciaListPage
      }
    ])
  ],
  declarations: [OcorrenciaListPage]
})
export class OcorrenciaListPageModule {}
