import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorViewComponent } from './fornecedor-view.component';

describe('FornecedorViewComponent', () => {
  let component: FornecedorViewComponent;
  let fixture: ComponentFixture<FornecedorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
