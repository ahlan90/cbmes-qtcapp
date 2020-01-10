import { BrMaskerModule } from 'br-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcorrenciaNewPageRoutingModule } from './ocorrencia-new-routing.module';

import { OcorrenciaNewPage } from './ocorrencia-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BrMaskerModule,
    OcorrenciaNewPageRoutingModule
  ],
  declarations: [OcorrenciaNewPage]
})
export class OcorrenciaNewPageModule {}
