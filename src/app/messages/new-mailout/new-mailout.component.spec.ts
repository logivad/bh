import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMailoutComponent } from './new-mailout.component';

describe('NewMailoutComponent', () => {
  let component: NewMailoutComponent;
  let fixture: ComponentFixture<NewMailoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMailoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMailoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
