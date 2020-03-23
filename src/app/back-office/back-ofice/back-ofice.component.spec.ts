import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOficeComponent } from './back-ofice.component';

describe('BackOficeComponent', () => {
  let component: BackOficeComponent;
  let fixture: ComponentFixture<BackOficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackOficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackOficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
