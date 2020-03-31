import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayHeaderComponent } from './overlay.component';

describe('OverlayHeaderComponent', () => {
  let component: OverlayHeaderComponent;
  let fixture: ComponentFixture<OverlayHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
