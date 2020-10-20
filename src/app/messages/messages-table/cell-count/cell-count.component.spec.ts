import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellCountComponent } from './cell-count.component';

describe('CellCountComponent', () => {
  let component: CellCountComponent;
  let fixture: ComponentFixture<CellCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
