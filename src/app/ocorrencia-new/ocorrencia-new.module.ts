import { OcorrenciaSharedModule } from './../shared/ocorrencia-shared/ocorrencia-shared.module';
import { NgModule } from '@angular/core';
import { OcorrenciaNewPageRoutingModule } from './ocorrencia-new-routing.module';
import { OcorrenciaNewPage } from './ocorrencia-new.page';

@NgModule({
  imports: [
    OcorrenciaSharedModule,
    OcorrenciaNewPageRoutingModule
  ],
  declarations: [OcorrenciaNewPage]
})
export class OcorrenciaNewPageModule {}
