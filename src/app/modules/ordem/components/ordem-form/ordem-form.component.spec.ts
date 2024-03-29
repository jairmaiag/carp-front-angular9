import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemFormComponent } from './ordem-form.component';

describe('OrdemFormComponent', () => {
  let component: OrdemFormComponent;
  let fixture: ComponentFixture<OrdemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
