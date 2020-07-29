import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSimnaoComponent } from './modal-simnao.component';

describe('ModalSimnaoComponent', () => {
  let component: ModalSimnaoComponent;
  let fixture: ComponentFixture<ModalSimnaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSimnaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSimnaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
