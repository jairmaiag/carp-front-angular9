import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCancelarComponent } from './botao-cancelar.component';

describe('BotaoCancelarComponent', () => {
  let component: BotaoCancelarComponent;
  let fixture: ComponentFixture<BotaoCancelarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoCancelarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoCancelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
