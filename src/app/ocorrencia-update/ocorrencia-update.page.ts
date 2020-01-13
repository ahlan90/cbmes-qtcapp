import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Endereco } from './../shared/models/endereco';
import { OcorrenciaService } from './../services/ocorrencia.service';
import { Ocorrencia } from './../shared/models/ocorrencia';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ocorrencia-update',
  templateUrl: './ocorrencia-update.page.html',
  styleUrls: ['./ocorrencia-update.page.scss'],
})
export class OcorrenciaUpdatePage implements OnInit {

  ocorrencia: Ocorrencia;

  validationsForm: FormGroup;

  sexos: Array<string>;
  cores: Array<string>;
  estadosCivil: Array<string>;

  endereco: Endereco;

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

    this.sexos = [
      'Masculino',
      'Feminino'
    ];

    this.cores = [
      'Branco',
      'Pardo'
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
      ufIdentidade: new FormControl('', null),
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
      })
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
          telefone: this.ocorrencia.vitima.telefone
        });
      });

    });
  }

  onSubmit(values) {
      this.ocorrencia.vitima = values;

      this.ocorrenciaService.update(this.ocorrencia);
      this.validationsForm.reset();
      //this.presentToast();
      this.router.navigate(['/ocorrencia']);
    }

  segmentChanged(ev) {
      this.tabSegment = ev.detail.value;
    }
}
