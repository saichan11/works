import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhicityComponent } from './delhicity.component';

describe('DelhicityComponent', () => {
  let component: DelhicityComponent;
  let fixture: ComponentFixture<DelhicityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelhicityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
