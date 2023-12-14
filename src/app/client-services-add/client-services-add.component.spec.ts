import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServicesAddComponent } from './client-services-add.component';

describe('ClientServicesAddComponent', () => {
  let component: ClientServicesAddComponent;
  let fixture: ComponentFixture<ClientServicesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientServicesAddComponent]
    });
    fixture = TestBed.createComponent(ClientServicesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
