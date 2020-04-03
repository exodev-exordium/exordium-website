import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightHeaderComponent } from './light-header.component';

describe('LightHeaderComponent', () => {
  let component: LightHeaderComponent;
  let fixture: ComponentFixture<LightHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
