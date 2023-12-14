import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientServices } from '../client-services';
import { ServicesService } from '../services.service';
import { Services } from '../services';
import { ClientServicesService } from '../client-services.service';

@Component({
  selector: 'app-client-services-add',
  templateUrl: './client-services-add.component.html',
  styleUrls: ['./client-services-add.component.css']
})
export class ClientServicesAddComponent implements OnInit{
  id!:number;
  clientService:ClientServices = new ClientServices();
  services!:Services[];
  clientNo!:number;
  service1:Services = new Services();

  constructor(private router:Router,private route:ActivatedRoute ,private clientServices:ClientServicesService,private serve:ServicesService){}
  ngOnInit(): void {
    this.clientNo = this.route.snapshot.params['id'];
    console.log(this.clientNo);
    this.clientServices.generateId().subscribe(data=>{this.clientService.serialNumber=data});
    this.serve.getServicesList().subscribe(data=>{this.services=data});
    this.clientService.clientNumber=Number(this.clientNo);
    
    
  }
  onSubmit(){
    
    console.log(this.clientService);
    this.saveService();


    
  }

  saveService(){
    console.log(this.clientService.serviceType);
    

    console.log(this.clientService.serviceType);
    this.serve.getServiceByName(this.clientService.serviceType).subscribe(data=>{
      this.service1=data;
      console.log(this.service1);
      this.clientService.amount=this.service1.price;
      this.clientService.serviceId=this.service1.serviceId;
      console.log(this.clientService.amount);
      console.log(this.clientService);
      this.clientServices.saveNewClientService(this.clientService.clientNumber,this.clientService).subscribe(data=>{
        console.log(data);
        this.clientServiceList();
        
      });
    });

    
    

  }
  clientServiceList(){
    this.router.navigate([`client-service-list/${this.clientService.clientNumber}`]);
  }
  clientList(){
    this.router.navigate(['client-list']);
  }
  clientadd(){
    this.router.navigate(['client-add']);
  }
}
