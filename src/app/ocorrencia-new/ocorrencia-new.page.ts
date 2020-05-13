import { Vitima } from './../shared/models/vitima';
import { Ocorrencia } from './../shared/models/ocorrencia';
import { Router } from '@angular/router';
import { OcorrenciaService } from '../services/ocorrencia.service';
import { Endereco } from '../shared/models/endereco';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import * as cep from 'cep-promise';
import { ToastController } from '@ionic/angular';
import { Quilometragem } from '../shared/models/quilometragem';

@Component({
  selector: 'app-ocorrencia-new',
  templateUrl: './ocorrencia-new.page.html',
  styleUrls: ['./ocorrencia-new.page.scss'],
})
export class OcorrenciaNewPage implements OnInit {

  validationsForm: FormGroup;

  ocorrencia: Ocorrencia;

  sexos: Array<string>;
  cores: Array<string>;
  estadosCivil: Array<string>;
  ufsIdentidades: Array<string>;

  endereco: Endereco;
  quilometragem:Quilometragem;

  //KmInicial: Number = this.kmSaidaBatalhao;

  tabSegment = 'geral';

  validationMessages = {
    obrigatorio: [
      { type: 'required', message: 'Campo obrigatório' }
    ],
  };

  constructor(
    public formBuilder: FormBuilder,
    private ocorrenciaService: OcorrenciaService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {


    this.sexos = [
      'Masculino',
      'Feminino'
    ];

    this.ufsIdentidades = [
      'AC',
      'AL',
      'AM',
      'AP',
      'BA',
      'CE',
      'DF',
      'ES',
      'GO',
      'MA',
      'MG',
      'MS',
      'MT',
      'PA',
      'PB',
      'PE',
      'PI',
      'PR',
      'RJ',
      'RN',
      'RO',
      'RR',
      'RS',
      'SC',
      'SE',
      'SP',
      'TO'
    ];

    this.cores = [
      'Branca',
      'Negra',
      'Parda',
      'Amarela'
    ];

    this.estadosCivil = [
      'Solteiro(a)',
      'Casado(a)',
      'Desquitado(a)'
    ];

    this.validationsForm = this.formBuilder.group({
      nome: new FormControl('', Validators.required),
      dataNascimento: new FormControl('', null),
      identidade: new FormControl('', null),
      ufIdentidade: new FormControl(this.ufsIdentidades[7], null),
      cpf: new FormControl('', null),
      nomeMae: new FormControl('', null),
      nomePai: new FormControl('', null),
      sexo: new FormControl(this.sexos[0], null),
      cor: new FormControl('', null),
      nacionalidade: new FormControl('Brasileiro', null),
      altura: new FormControl('', null),
      naturalidade: new FormControl('', null),
      estadoCivil: new FormControl(this.estadosCivil[0], null),
      email: new FormControl('', Validators.compose([
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      telefone: new FormControl('', null),
      endereco: this.formBuilder.group({
        bairro: new FormControl('', null),
        cep: new FormControl('', null),
        cidade: new FormControl('', null),
        complemento: new FormControl('', null),
        logradouro: new FormControl('', null),
        numero: new FormControl('', null),
        uf: new FormControl('', null),
      }),
      quilometragem: this.formBuilder.group({
        viatura: new FormControl('', null),
        kmSaidaBatalhao: new FormControl('', null),
        kmChegadaBatalhao:new FormControl('', null),
        horaSaidaBatalhao:new FormControl('', null),
        horaChegadaBatalhao:new FormControl('', null),
        kmChegadaLocal:new FormControl('', null),
        horaChegadaLocal:new FormControl('', null),
        horaSaidaLocal:new FormControl('', null),
        kmChegadaHospital:new FormControl('', null),
        horaChegadaHospital:new FormControl('', null),
        horaSaidaHospital:new FormControl('', null),
        observacao:new FormControl('', null),
      })
    });
  }

  onSubmit(values) {
    //this.kmTotal = this.quilometragem.kmSaidaBatalhao;
    this.ocorrenciaService.addVitima(values);
    this.validationsForm.reset();
    this.presentToast();
    this.router.navigate(['/ocorrencias']);
  }

  preencheCEP(value) {
    if (value.length === 10) {
      const cepLimpo = value.replace(/\D/g, '');

      cep(cepLimpo).then(res => {
        this.validationsForm.patchValue({
          endereco: {
            bairro: res.neighborhood,
            cidade: res.city,
            logradouro: res.street,
            uf: res.state,
          }
        });
      });
    }
  }

  preencheKm(value) {
    if(value.length === 4){
      const kmTotal = value.replace(null);
      this.validationsForm.patchValue({
        quilometragem: {
          //kmSaidaBatalhao: this.ocorrencia.vitima.quilometragem.kmChegadaLocal,
          kmChegadaBatalhao: kmTotal,
          kmChegadaLocal: kmTotal,
          kmChegadaHospital: kmTotal,
        }
      })
    }  
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Ocorrência Salva com Sucesso.',
      duration: 2000
    });
    toast.present();
  }


  segmentChanged(ev) {
    this.tabSegment = ev.detail.value;
  }

}
