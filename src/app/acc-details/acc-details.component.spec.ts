import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccDetailsComponent } from './acc-details.component';

describe('AccDetailsComponent', () => {
  let component: AccDetailsComponent;
  let fixture: ComponentFixture<AccDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccDetailsComponent]
    });
    fixture = TestBed.createComponent(AccDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
