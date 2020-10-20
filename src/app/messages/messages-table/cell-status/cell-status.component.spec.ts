import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellStatusComponent } from './cell-status.component';

describe('CellStatusComponent', () => {
  let component: CellStatusComponent;
  let fixture: ComponentFixture<CellStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
