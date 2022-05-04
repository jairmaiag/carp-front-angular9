import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioViewComponent } from './funcionario-view.component';

describe('FuncionarioViewComponent', () => {
  let component: FuncionarioViewComponent;
  let fixture: ComponentFixture<FuncionarioViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
