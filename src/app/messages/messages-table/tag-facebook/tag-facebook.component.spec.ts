import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagFacebookComponent } from './tag-facebook.component';

describe('TagFacebookComponent', () => {
  let component: TagFacebookComponent;
  let fixture: ComponentFixture<TagFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
