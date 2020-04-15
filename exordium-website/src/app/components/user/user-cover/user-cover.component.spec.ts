import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoverComponent } from './user-cover.component';

describe('UserCoverComponent', () => {
  let component: UserCoverComponent;
  let fixture: ComponentFixture<UserCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
