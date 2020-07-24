import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoViewComponent } from './orcamento-view.component';

describe('OrcamentoViewComponent', () => {
  let component: OrcamentoViewComponent;
  let fixture: ComponentFixture<OrcamentoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcamentoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
