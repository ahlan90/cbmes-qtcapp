import { Router } from '@angular/router';
import { OcorrenciaService } from '../services/ocorrencia.service';
import { Component, OnInit } from '@angular/core';
import { Ocorrencia } from '../shared/models/ocorrencia';

@Component({
  selector: 'app-ocorrencia-list',
  templateUrl: 'ocorrencia-list.page.html',
  styleUrls: ['ocorrencia-list.page.scss']
})
export class OcorrenciaListPage implements OnInit {

  private selectedItem: any;

  public ocorrencias: Array<Ocorrencia> = [];

  exibeLista = true;

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private router: Router
    ) {}

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.exibeLista = true;
    this.ocorrenciaService.getAll().subscribe( res => this.ocorrencias = res as Ocorrencia[]);
  }

  goToForm() {
    this.exibeLista = false;
    
    //Ajustando bug do layout
    setTimeout(() => {
      this.router.navigate(['/nova']);
    },10);
  }
}
