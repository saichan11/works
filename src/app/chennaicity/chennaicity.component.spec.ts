import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChennaicityComponent } from './chennaicity.component';

describe('ChennaicityComponent', () => {
  let component: ChennaicityComponent;
  let fixture: ComponentFixture<ChennaicityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChennaicityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChennaicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
