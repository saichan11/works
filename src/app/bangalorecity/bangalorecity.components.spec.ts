import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BangalorecityComponent } from './bangalorecity.component';

describe('BangalorecityComponent', () => {
  let component: BangalorecityComponent;
  let fixture: ComponentFixture<BangalorecityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangalorecityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BangalorecityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
