import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoSimComponent } from './botao-sim.component';

describe('BotaoSimComponent', () => {
  let component: BotaoSimComponent;
  let fixture: ComponentFixture<BotaoSimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoSimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
