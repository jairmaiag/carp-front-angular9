import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemViewComponent } from './ordem-view.component';

describe('OrdemViewComponent', () => {
  let component: OrdemViewComponent;
  let fixture: ComponentFixture<OrdemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
