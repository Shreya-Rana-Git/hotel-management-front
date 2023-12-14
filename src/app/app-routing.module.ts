import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
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
import { ClientUpdateComponent } from './client-update/client-update.component';
import { ClientServicesListComponent } from './client-services-list/client-services-list.component';
import { ClientServicesAddComponent } from './client-services-add/client-services-add.component';
import { BillComponent } from './bill/bill.component';
import { Services } from './services';
import { AddServicesComponent } from './add-services/add-services.component';
import { ListServicesComponent } from './list-services/list-services.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'hotel', component:HotelComponent},
  {path:'hotel-list', component:HotelListComponent},
  {path:'hotel-details/:id',component:HotelDetailsComponent},
  {path:'add-hotel', component:AddHotelComponent},
  {path:'accommodation', component:AccommodationComponent},
  {path:'acco-list', component:AccommodationListComponent},
  {path: 'add-acco', component:AddAccommodationComponent},
  {path:'acc-details/:id', component:AccDetailsComponent},
  {path:'update-acco/:id', component:UpdateAccommodationComponent},
  {path:'client', component:ClientComponent},
  {path:'client-list', component:ClientListComponent},
  {path:'client-details/:id',component:ClientDetailsComponent},
  {path:'client-add', component:ClientAddComponent},
  {path:'client-update/:id', component:ClientUpdateComponent},
  {path:'client-service-list/:id', component:ClientServicesListComponent},
  {path:'client-service-add/:id',component:ClientServicesAddComponent},
  {path:'bill/:id',component:BillComponent},
  {path:'services',component:ServicesComponent},
  {path:'add-services',component:AddServicesComponent},
  {path:'list-services',component:ListServicesComponent},
  {path:'update-service/:id',component:UpdateServiceComponent},
  {path:'service-details/:id',component:ServiceDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
