import { Vitima } from './../shared/models/vitima';
import { Ocorrencia } from './../shared/models/ocorrencia';
import { Storage } from '@ionic/storage';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {

  listaOcorrencias: Array<Ocorrencia> = [];
  ocorrencia = {} as Ocorrencia;

  constructor(private store: Storage) {

  }

  addVitima(vitima: Vitima) {
      this.ocorrencia.id = this.listaOcorrencias.length + 1;
      this.ocorrencia.vitima = vitima;
      this.listaOcorrencias.push(this.ocorrencia);
      this.ocorrencia = {} as Ocorrencia;
  }

  getAll() {
    return this.listaOcorrencias;
  }

  get(id: number) {
    console.log('LISTA', this.listaOcorrencias);
    
    return this.listaOcorrencias.find(x => x.id === id);
  }

  update(ocorrencia) {
    this.ocorrencia = ocorrencia;
  }
}
