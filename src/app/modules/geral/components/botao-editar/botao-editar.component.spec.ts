import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoEditarComponent } from './botao-editar.component';

describe('BotaoEditarComponent', () => {
  let component: BotaoEditarComponent;
  let fixture: ComponentFixture<BotaoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
