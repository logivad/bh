import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellNameComponent } from './cell-name.component';

describe('CellNameComponent', () => {
  let component: CellNameComponent;
  let fixture: ComponentFixture<CellNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
