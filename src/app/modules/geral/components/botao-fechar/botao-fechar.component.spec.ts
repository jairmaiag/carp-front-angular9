import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoFecharComponent } from './botao-fechar.component';

describe('BotaoFecharComponent', () => {
  let component: BotaoFecharComponent;
  let fixture: ComponentFixture<BotaoFecharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoFecharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoFecharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
