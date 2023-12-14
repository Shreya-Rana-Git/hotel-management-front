import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { Hotel } from '../hotel';
import { Accommodation } from '../accommodation';
import { HotelService } from '../hotel.service';
import { AccommodationService } from '../accommodation.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {
  constructor(private router:Router, private clientService:ClientService,private route:ActivatedRoute,private hotelService:HotelService,private accoService:AccommodationService){}

 id!:number;
 client:Client=new Client();
 options:String[]=Array("paid","pending");
 hotels!:Hotel[];
  acco!:Accommodation[];
 ngOnInit(): void {
   this.id=this.route.snapshot.params['id'];
   this.clientService.getClientById(this.id).subscribe(data=>{
    this.client=data;
    console.log(this.client);
   });
   this.hotelService.getHotelList().subscribe(data=>{
    this.hotels=data;
    console.log(this.hotels);
  });
  this.accoService.getAllAccommodations().subscribe(data=>{
    this.acco=data;
    console.log(data);
    console.log(this.acco);
  });
 }
  onSubmit(){
    this.clientService.updateClient(this.id,this.client).subscribe(data=>{
      console.log(data);
      this.clientList();
    });
  }
  clientList(){
    this.router.navigate(['client-list']);
  }
  clientadd(){
    this.router.navigate(['client-add']);
  }

}
