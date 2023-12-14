import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Accommodation } from '../accommodation';
import { AccommodationService } from '../accommodation.service';
import { ClientServicesService } from '../client-services.service';
import { ClientServices } from '../client-services';
import { count } from 'rxjs';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
clientId!:number;
client:Client = new Client();
accommodation:Accommodation= new Accommodation();
services!:ClientServices[];
hotel:Hotel = new Hotel();
constructor(private route:ActivatedRoute, 
  private clientService:ClientService,
  private accoService:AccommodationService,
  private serve:ClientServicesService,
  private hotelService:HotelService,
  private router:Router
   ){}
date=new Date();
  total!:number;
   ngOnInit(): void {

    this.countTotal();
    
   }

 countTotal(){
  this.clientId = this.route.snapshot.params['id'];
  

  this.clientService.getClientById(Number(this.clientId)).subscribe(data=>{
   console.log(data);
   this.client=data;
   console.log(this.client.accommodationId);
   console.log(this.client.clientAddress);
    this.hotelService.getSingleHotel(this.client.hotelId).subscribe(data=>{
      this.hotel=data;
      console.log(this.hotel);
      console.log(this.hotel.hotelName);
      
      
    });
   this.accoService.getAccoById(this.client.accommodationId).subscribe(data=>{
    console.log(data);
    this.accommodation=data;
    this.total=data.farePerDay;
    console.log(this.accommodation.farePerDay);
    
  this.serve.getClientServicesByClientId(Number(this.clientId)).subscribe(data=>{

    console.log(this.total);
    this.services=data;
    console.log(this.services);
    this.services.forEach(service => {
      console.log(service.serviceType);
      
      console.log(service.amount);
      
      this.total+=service.amount;
      this.total+=0;


    });

    console.log(this.total);
    
    

  });
   }) 
  });
 }

 pay(){
  console.log(this.client);
  this.client.payStatus="paid";
  this.clientService.updateClient(this.client.clientNumber,this.client).subscribe(data=>{
    this.goToClientList();
  });
  alert("Payment Done SuccessFully!!!");
  
  
 }
 goToClientList(){
  this.router.navigate(['client-list']);
 }
}
