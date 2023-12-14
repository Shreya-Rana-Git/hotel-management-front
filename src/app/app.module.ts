import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { FormsModule } from '@angular/forms';
import { HotelComponent } from './hotel/hotel.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { AccommodationListComponent } from './accommodation-list/accommodation-list.component';
import { AddAccommodationComponent } from './add-accommodation/add-accommodation.component';
import { AccDetailsComponent } from './acc-details/acc-details.component';
import { UpdateAccommodationComponent } from './update-accommodation/update-accommodation.component';
import { ClientComponent } from './client/client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { CommonModule } from '@angular/common';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { ClientServicesListComponent } from './client-services-list/client-services-list.component';
import { ClientServicesAddComponent } from './client-services-add/client-services-add.component';
import { BillComponent } from './bill/bill.component';
import { ServicesComponent } from './services/services.component';
import { AddServicesComponent } from './add-services/add-services.component';
import { ListServicesComponent } from './list-services/list-services.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    HotelDetailsComponent,
    AddHotelComponent,
    HotelComponent,
    AccommodationComponent,
    AccommodationListComponent,
    AddAccommodationComponent,
    AccDetailsComponent,
    UpdateAccommodationComponent,
    ClientComponent,
    ClientListComponent,
    ClientDetailsComponent,
    ClientAddComponent,
    ClientUpdateComponent,
    ClientServicesListComponent,
    ClientServicesAddComponent,
    BillComponent,
    ServicesComponent,
    AddServicesComponent,
    ListServicesComponent,
    UpdateServiceComponent,
    ServiceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
