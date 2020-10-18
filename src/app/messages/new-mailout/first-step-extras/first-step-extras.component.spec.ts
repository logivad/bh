import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepExtrasComponent } from './first-step-extras.component';

describe('FirstStepExtrasComponent', () => {
  let component: FirstStepExtrasComponent;
  let fixture: ComponentFixture<FirstStepExtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStepExtrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStepExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
