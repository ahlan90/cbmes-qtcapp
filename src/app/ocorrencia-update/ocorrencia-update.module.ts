import { OcorrenciaSharedModule } from './../shared/ocorrencia-shared/ocorrencia-shared.module';
import { NgModule } from '@angular/core';
import { OcorrenciaUpdatePageRoutingModule } from './ocorrencia-update-routing.module';
import { OcorrenciaUpdatePage } from './ocorrencia-update.page';

@NgModule({
  imports: [
    OcorrenciaSharedModule,
    OcorrenciaUpdatePageRoutingModule
  ],
  declarations: [OcorrenciaUpdatePage]
})
export class OcorrenciaUpdatePageModule {}
