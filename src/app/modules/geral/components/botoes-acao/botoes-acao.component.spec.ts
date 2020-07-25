import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesAcaoComponent } from './botoes-acao.component';

describe('BotoesAcaoComponent', () => {
  let component: BotoesAcaoComponent;
  let fixture: ComponentFixture<BotoesAcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoesAcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoesAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
