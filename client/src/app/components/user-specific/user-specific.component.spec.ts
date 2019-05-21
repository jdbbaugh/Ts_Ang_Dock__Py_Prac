import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSpecificComponent } from './user-specific.component';

describe('UserSpecificComponent', () => {
  let component: UserSpecificComponent;
  let fixture: ComponentFixture<UserSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
