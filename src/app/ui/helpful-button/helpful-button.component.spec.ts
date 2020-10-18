import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpfulButtonComponent } from './helpful-button.component';

describe('HelpfulButtonComponent', () => {
  let component: HelpfulButtonComponent;
  let fixture: ComponentFixture<HelpfulButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpfulButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpfulButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
