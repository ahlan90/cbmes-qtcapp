
import { Ocorrencia } from './../shared/models/ocorrencia';
import { Router } from '@angular/router';
import { OcorrenciaService } from '../services/ocorrencia.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-ocorrencia-list',
  templateUrl: 'ocorrencia-list.page.html',
  styleUrls: ['ocorrencia-list.page.scss']
})
export class OcorrenciaListPage implements OnInit {

  private selectedItem: any;
  private refreshSubject: Subject<void>;
private refreshObservable: Observable<void>;

  public ocorrencias: Ocorrencia[] = [];
  public ocorrenciasConcluidas: Ocorrencia[] = [];

  exibeLista = true;

  tabSegment = 'emAberto';



  constructor(
    private ocorrenciaService: OcorrenciaService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController
    ) {}

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.exibeLista = true;
    this.ocorrenciaService.getAll().subscribe( res => {

      this.ocorrencias = res as Ocorrencia[];
      this.ocorrencias = this.ocorrencias.filter(x => x.finalizada === false);

      this.ocorrenciasConcluidas = res as Ocorrencia[];
      this.ocorrenciasConcluidas = this.ocorrenciasConcluidas.filter(x => x.finalizada);
    });

  }

  goToForm() {
    this.exibeLista = false;
    //Ajustando bug do layout
    setTimeout(() => {
      this.router.navigate(['/nova']);
    },10);
  }

  async remove(ocorrencia: Ocorrencia){
    const alert = await this.alertController.create({
      header: 'Remover Ocorrência',
      message: `Tem certeza que deseja remover a Ocorrência <strong>${ocorrencia.vitima.nome}</strong>?`,
      buttons: [
        {
          text: 'Não',
          role: 'nao',
          cssClass: 'primary',
        }, {
          text: 'Sim, Remover',
          handler: () => {
            this.ocorrenciaService.remove(ocorrencia);
            if (!ocorrencia.finalizada){
              this.apagaOcorrencia(this.ocorrencias, ocorrencia);
            }
            else {
              this.apagaOcorrencia(this.ocorrenciasConcluidas, ocorrencia);
            }
            this.presentToast(`Ocorrência removida com sucesso.`);
          }
        }
      ]
    });
    await alert.present();
  }

  conclui(ocorrencia: Ocorrencia) {
    this.ocorrenciaService.conclui(ocorrencia);
    const index = this.ocorrencias.indexOf(ocorrencia);
    this.ocorrencias.splice(index, 1);
    this.ocorrenciasConcluidas.push(ocorrencia);
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  apagaOcorrencia(ocorrencia: Ocorrencia[], ocorrenciaId: Ocorrencia){
    const index = ocorrencia.indexOf(ocorrenciaId);
    ocorrencia.splice(index, 1);
  }

  segmentChanged(ev) {
    this.tabSegment = ev.detail.value;
  }

}
