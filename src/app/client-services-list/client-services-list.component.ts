import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Services } from '../services';
import { ClientServices } from '../client-services';
import { ClientServicesService } from '../client-services.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-services-list',
  templateUrl: './client-services-list.component.html',
  styleUrls: ['./client-services-list.component.css']
})
export class ClientServicesListComponent implements OnInit{

  id!:number;
  services!:ClientServices[];
  constructor(private router:Router,private clientServices:ClientServicesService,private route:ActivatedRoute,private clientServe:ClientService){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.clientServices.getClientServicesByClientId(this.id).subscribe(data=>{
      this.services=data;

    });
  }

  addService(clientNumber:number){
    this.router.navigate(['client-service-add',clientNumber])
  }

  deleteAll(clientNumber:number){
    this.clientServices.deleteAll(clientNumber).subscribe(data=>{
      this.clientServices.getClientServicesByClientId(this.id).subscribe(data=>{
        this.services=data;
      });
    })
  }

  clientServiceList(id:number){
    this.router.navigate(['client-service-list',id]);
  }
  clientList(){
    this.router.navigate(['client-list']);
  }
  clientadd(){
    this.router.navigate(['client-add']);
  }
  createBill(id:number){
    this.clientServe.getClientById(id).subscribe(client=>{
      if (client.payStatus=="paid") {
        alert("Bill Has Already Been Paid");
        this.clientList();
      }
      else{
        this.router.navigate(['bill',id]);
      }
    });
    
  }


  deleteSingle(serialNumber:number){
    this.clientServices.deleteSingle(serialNumber).subscribe(data=>{
      this.clientServices.getClientServicesByClientId(this.id).subscribe(data=>{
        this.services=data;
      });
    });
  }
}
