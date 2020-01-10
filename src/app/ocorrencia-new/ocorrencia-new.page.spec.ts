import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OcorrenciaNewPage } from './ocorrencia-new.page';

describe('OcorrenciaNewPage', () => {
  let component: OcorrenciaNewPage;
  let fixture: ComponentFixture<OcorrenciaNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcorrenciaNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OcorrenciaNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
