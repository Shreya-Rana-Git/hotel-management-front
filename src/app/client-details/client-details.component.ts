import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit{

  client:Client= new Client;
  id!:number;
  constructor(private router:Router, private clientService:ClientService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClientById(this.id).subscribe(data=>{
      console.log(data);
      this.client=data;
    });
  }
  clientList(){
    this.router.navigate(['client-list']);
  }
  clientadd(){
    this.router.navigate(['client-add']);
  }

}
