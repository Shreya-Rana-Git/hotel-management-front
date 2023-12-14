import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from '../services';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent {

  services!:Services[];
  constructor(private router:Router,private serve:ServicesService){}

  ngOnInit(): void {
    this.serve.getServicesList().subscribe(data=>{
      console.log(data);
      this.services=data;
    });
    
  }

  details(id:number){
    this.router.navigate(['service-details',id]);
  }
  update(id:number){
    this.router.navigate(['update-service',id]);
  }
  delete(id:number){
    this.serve.deleteService(id).subscribe(data=>{
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
