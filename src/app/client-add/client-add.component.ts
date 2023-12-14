import { Component, ElementRef, OnInit , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { AccommodationService } from '../accommodation.service';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';
import { Accommodation } from '../accommodation';
import { FormGroup, FormControl } from "@angular/forms";



@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  
  newId!:number;
  client:Client=new Client;
  hotels!:Hotel[];
  acco!:Accommodation[];
  constructor(private router:Router, private clientService:ClientService,private accService:AccommodationService, private hotelService:HotelService){}
  
  ngOnInit(): void {
    this.clientService.getNewId().subscribe(data=>{
      this.newId=data;
    });
    this.hotelService.getHotelList().subscribe(data=>{
      this.hotels=data;
      console.log(this.hotels);
    });
    this.accService.getAllAccommodations().subscribe(data=>{
      this.acco=data;
      console.log(data);
      console.log(this.acco);
    });
    
  }
  options:String[]=Array("paid","pending");
  saveNewClient(){
    this.client.clientNumber=this.newId;
    
    this.clientService.saveClient(this.client).subscribe(data=>{
      
      console.log(data);
      this.clientList();
      console.log(data);
    });
  }
  onSubmit(){
    this.saveNewClient();

  }
  
  
  
  clientList(){
    this.router.navigate(['client-list']);
   }
   clientadd(){
    this.router.navigate(['client-add']);
  }

}
