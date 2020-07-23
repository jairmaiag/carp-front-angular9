import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoNovoComponent } from './botao-novo.component';

describe('BotaoNovoComponent', () => {
  let component: BotaoNovoComponent;
  let fixture: ComponentFixture<BotaoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
