import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServicesListComponent } from './client-services-list.component';

describe('ClientServicesListComponent', () => {
  let component: ClientServicesListComponent;
  let fixture: ComponentFixture<ClientServicesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientServicesListComponent]
    });
    fixture = TestBed.createComponent(ClientServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
