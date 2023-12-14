import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { Route, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.css']
})
export class AddServicesComponent implements OnInit {

  service:Services = new Services();
  newId!:number;
  constructor(private router:Router, private serve:ServicesService){}

  ngOnInit(): void {
   this.serve.getNewId().subscribe(data=>{
    this.service.serviceId=data;
   });
  }
  onSubmit(){
    this.saveServices();
  }
  saveServices(){
    this.serve.saveNewService(this.service).subscribe(data=>{
      console.log(data);
      this.listServices();
      
    });
  }

  addService(){
    this.router.navigate(['add-services']);
  }

  listServices(){
    this.router.navigate(['list-services']);
  }
}
