import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoDetalharComponent } from './botao-detalhar.component';

describe('BotaoDetalharComponent', () => {
  let component: BotaoDetalharComponent;
  let fixture: ComponentFixture<BotaoDetalharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoDetalharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
