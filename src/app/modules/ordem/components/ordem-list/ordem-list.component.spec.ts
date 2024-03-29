import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemListComponent } from './ordem-list.component';

describe('OrdemListComponent', () => {
  let component: OrdemListComponent;
  let fixture: ComponentFixture<OrdemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
