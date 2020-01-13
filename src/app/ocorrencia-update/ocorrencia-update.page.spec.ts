import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OcorrenciaUpdatePage } from './ocorrencia-update.page';

describe('OcorrenciaUpdatePage', () => {
  let component: OcorrenciaUpdatePage;
  let fixture: ComponentFixture<OcorrenciaUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcorrenciaUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OcorrenciaUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
