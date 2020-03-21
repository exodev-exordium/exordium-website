import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryFooterComponent } from './primary.component';

describe('PrimaryFooterComponent', () => {
  let component: PrimaryFooterComponent;
  let fixture: ComponentFixture<PrimaryFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
