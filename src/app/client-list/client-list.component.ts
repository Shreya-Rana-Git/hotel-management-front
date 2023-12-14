import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  
  
  clients!:Client[];
  constructor(private clientService:ClientService, private router:Router){}

  ngOnInit(): void {
    this.showTheList();
  }

  showTheList(){
    this.clientService.getAllClients().subscribe(data=>{
      this.clients=data;
    });
  }

  showDetails(clientNumber:number){
    this.router.navigate(['client-details',clientNumber]);
  }

  showServices(clientNumber:number){
    
   
    this.router.navigate(['client-service-list',clientNumber]);
  }

  clientList(){
    this.router.navigate(['client-list']);
  }
  clientadd(){
    this.router.navigate(['client-add']);
  }
  DeleteClient(clientNumber:number){
    this.clientService.deleteClient(clientNumber).subscribe(data=>{

      this.showTheList();
    });
    
  }

  UpdateClient(clientNumber:number){
    this.router.navigate(['client-update',clientNumber]);
  }

}
