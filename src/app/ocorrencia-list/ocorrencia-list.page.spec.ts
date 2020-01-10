import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OcorrenciaListPage } from './ocorrencia-list.page';

describe('OcorrenciaListPage', () => {
  let component: OcorrenciaListPage;
  let fixture: ComponentFixture<OcorrenciaListPage>;
  let listPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcorrenciaListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OcorrenciaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    listPage = fixture.nativeElement;
    const items = listPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
