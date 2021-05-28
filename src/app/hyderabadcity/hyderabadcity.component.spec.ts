import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyderabadcityComponent } from './hyderabadcity.component';

describe('HyderabadcityComponent', () => {
  let component: HyderabadcityComponent;
  let fixture: ComponentFixture<HyderabadcityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyderabadcityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyderabadcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
