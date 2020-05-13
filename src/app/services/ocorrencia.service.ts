import { Vitima } from './../shared/models/vitima';
import { Ocorrencia } from './../shared/models/ocorrencia';
import { Storage } from '@ionic/storage';
import { Injectable, OnInit } from '@angular/core';

import { StorageMap, JSONSchema } from '@ngx-pwa/local-storage';
import { map } from 'rxjs/operators';

const KEY_LOCAL_STORAGE = 'listaOcorrencia';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {

  listaOcorrencias: Ocorrencia[];
  ocorrencia = {} as Ocorrencia;
  
  constructor(private store: StorageMap) {

    this.store.get(KEY_LOCAL_STORAGE).subscribe( res => {
      this.listaOcorrencias = res as Ocorrencia[];
    });
    
  }

  addVitima(vitima: Vitima) {
    this.store.get(KEY_LOCAL_STORAGE).subscribe(res => {
      this.listaOcorrencias = res as Ocorrencia[];
      
      if(!this.listaOcorrencias)
        this.listaOcorrencias = [];

      this.ocorrencia.id = this.listaOcorrencias.length + 1;
      this.ocorrencia.dataInicio = new Date();
      this.ocorrencia.finalizada = false;
      this.ocorrencia.vitima = vitima;
      this.listaOcorrencias.push(this.ocorrencia);
      this.ocorrencia = {} as Ocorrencia;
      this.store.set(KEY_LOCAL_STORAGE, this.listaOcorrencias).subscribe(() => {});
    });
  }

  getAll() {
    return this.store.get(KEY_LOCAL_STORAGE);
  }

  get(id: number) {
    return this.store.get(KEY_LOCAL_STORAGE).pipe(
      map( res => {
        let lista = res as Ocorrencia[];
        return lista.find(x => x.id === id);
      })
    );
  }

  update(ocorrencia) {
    this.store.get(KEY_LOCAL_STORAGE).subscribe(res => {
      this.listaOcorrencias = res as Ocorrencia[];

      this.listaOcorrencias = this.listaOcorrencias.filter(x => x.id != ocorrencia.id);
      
      this.listaOcorrencias.push(ocorrencia);

      this.store.set(KEY_LOCAL_STORAGE, this.listaOcorrencias).subscribe(() => {});
    });
  }

  conclui(ocorrencia: Ocorrencia) {
    ocorrencia.finalizada = true;
    ocorrencia.vitima.concluida = true;
    this.update(ocorrencia);
  }

  remove(ocorrencia ) {
      this.store.get(KEY_LOCAL_STORAGE).subscribe(res => {
      
      this.listaOcorrencias = res as Ocorrencia[];
      
      this.listaOcorrencias = this.listaOcorrencias.filter(x => x.id !== ocorrencia.id);
      
      this.store.delete(KEY_LOCAL_STORAGE).subscribe(() => {});

      this.store.set(KEY_LOCAL_STORAGE, this.listaOcorrencias).subscribe(() => {});

    });
  }


}
