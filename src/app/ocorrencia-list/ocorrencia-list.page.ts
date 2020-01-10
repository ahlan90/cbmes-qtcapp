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
  constructor(
    private ocorrenciaService: OcorrenciaService,
    private router: Router
    ) {}

  ngOnInit() {
    this.ocorrencias = this.ocorrenciaService.getAll();
  }

  goToForm() {
    this.router.navigate(['/nova']);
  }
}
