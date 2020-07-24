import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloTelaComponent } from './titulo-tela.component';

describe('TituloTelaComponent', () => {
  let component: TituloTelaComponent;
  let fixture: ComponentFixture<TituloTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
