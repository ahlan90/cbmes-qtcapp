import { Quilometragem } from './../shared/models/quilometragem';
import { Vitima } from './../shared/models/vitima';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Endereco } from './../shared/models/endereco';
import { OcorrenciaService } from './../services/ocorrencia.service';
import { Ocorrencia } from './../shared/models/ocorrencia';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as cep from 'cep-promise';

@Component({
  selector: 'app-ocorrencia-update',
  templateUrl: './ocorrencia-update.page.html',
  styleUrls: ['./ocorrencia-update.page.scss'],
})
export class OcorrenciaUpdatePage implements OnInit {

  ocorrencia: Ocorrencia;

  validationsForm: FormGroup;

  ufsIdentidades: Array<string>;
  sexos: Array<string>;
  cores: Array<string>;
  estadosCivil: Array<string>;

  endereco: Endereco;
  quilometragem: Quilometragem;

  kmInicial: Number;

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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  
  
  ngOnInit() {
    
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
    
    this.sexos = [
      'Masculino',
      'Feminino'
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
        kmSaidaBatalhao: new FormControl('999999', null),
        kmChegadaBatalhao:new FormControl('999999', null),
        horaSaidaBatalhao:new FormControl('', null),
        horaChegadaBatalhao:new FormControl('', null),
        kmChegadaLocal:new FormControl('', null),
        horaChegadaLocal:new FormControl('', null),
        horaSaidaLocal:new FormControl('', null),
        kmChegadaHospital:new FormControl('', null),
        horaChegadaHospital:new FormControl('', null),
        horaSaidaHospital:new FormControl('', null),
        observacao:new FormControl('', null),
      }),
      concluida: new FormControl(false, null)
    });


    this.activatedRoute.params.subscribe(res => {
      this.ocorrenciaService.get(Number(res.id)).subscribe(res => {
        this.ocorrencia = res;
        this.validationsForm.patchValue({
          nome: this.ocorrencia.vitima.nome,
          dataNascimento: this.ocorrencia.vitima.dataNascimento,
          identidade: this.ocorrencia.vitima.identidade,
          ufIdentidade: this.ocorrencia.vitima.ufIdentidade,
          cpf: this.ocorrencia.vitima.cpf,
          nomeMae: this.ocorrencia.vitima.nomeMae,
          nomePai: this.ocorrencia.vitima.nomePai,
          sexo: this.ocorrencia.vitima.sexo,
          cor: this.ocorrencia.vitima.cor,
          nacionalidade: this.ocorrencia.vitima.nacionalidade,
          altura: this.ocorrencia.vitima.altura,
          naturalidade: this.ocorrencia.vitima.naturalidade,
          estadoCivil: this.ocorrencia.vitima.estadoCivil,
          email: this.ocorrencia.vitima.email,
          telefone: this.ocorrencia.vitima.telefone,
          endereco:{
            bairro: this.ocorrencia.vitima.endereco.bairro,
            cep: this.ocorrencia.vitima.endereco.cep,
            cidade: this.ocorrencia.vitima.endereco.cidade,
            complemento: this.ocorrencia.vitima.endereco.complemento,
            logradouro: this.ocorrencia.vitima.endereco.cidade,
            numero: this.ocorrencia.vitima.endereco.numero,
            uf: this.ocorrencia.vitima.endereco.uf,
          },
          quilometragem:{
            viatura: this.ocorrencia.vitima.quilometragem.viatura,
            kmSaidaBatalhao: this.ocorrencia.vitima.quilometragem.kmSaidaBatalhao,
            kmChegadaBatalhao:this.ocorrencia.vitima.quilometragem.kmChegadaBatalhao,
            horaSaidaBatalhao:this.ocorrencia.vitima.quilometragem.horaSaidaBatalhao,
            horaChegadaBatalhao:this.ocorrencia.vitima.quilometragem.horaChegadaBatalhao,
            kmChegadaLocal:this.ocorrencia.vitima.quilometragem.kmChegadaLocal,
            horaSaidaLocal:this.ocorrencia.vitima.quilometragem.horaSaidaLocal,
            horaChegadaLocal:this.ocorrencia.vitima.quilometragem.horaChegadaLocal,
            kmChegadaHospital:this.ocorrencia.vitima.quilometragem.kmChegadaHospital,
            horaSaidaHospital:this.ocorrencia.vitima.quilometragem.horaSaidaHospital,
            horaChegadaHospital:this.ocorrencia.vitima.quilometragem.horaChegadaHospital,
            observacao:this.ocorrencia.vitima.quilometragem.observacao,
          },
          concluida: this.ocorrencia.finalizada,
        });
      });

    });
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
      const kmTotal = value.replace();
      this.validationsForm.patchValue({
        quilometragem: {
          kmChegadaBatalhao: kmTotal,
          kmChegadaLocal: kmTotal,
          kmChegadaHospital: kmTotal,
          kmSaidaBatalhao: kmTotal,
        }
      })
    }  
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Ocorrência Salva com Sucesso!.',
      duration: 2000
    });
    toast.present();
  }


  onSubmit(values) {
      this.ocorrencia.vitima = values;
      this.ocorrencia.finalizada = this.ocorrencia.vitima.concluida;
      this.ocorrenciaService.update(this.ocorrencia);
      this.validationsForm.reset();
      //this.presentToast();
      this.router.navigate(['/ocorrencias']);
    }

  segmentChanged(ev) {
      this.tabSegment = ev.detail.value;
    }
}
