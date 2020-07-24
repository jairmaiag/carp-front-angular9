import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoNaoComponent } from './botao-nao.component';

describe('BotaoNaoComponent', () => {
  let component: BotaoNaoComponent;
  let fixture: ComponentFixture<BotaoNaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoNaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoNaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
