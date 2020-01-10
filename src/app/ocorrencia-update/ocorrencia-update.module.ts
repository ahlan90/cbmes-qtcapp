import { BrMaskerModule } from 'br-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcorrenciaUpdatePageRoutingModule } from './ocorrencia-update-routing.module';

import { OcorrenciaUpdatePage } from './ocorrencia-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BrMaskerModule,
    OcorrenciaUpdatePageRoutingModule
  ],
  declarations: [OcorrenciaUpdatePage]
})
export class OcorrenciaUpdatePageModule {}
