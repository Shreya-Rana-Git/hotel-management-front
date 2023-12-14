import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { Services } from '../services';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  id!:any;
  service!:Services;
  constructor(private router:Router,private serve:ServicesService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.serve.getServiceById(Number(this.id)).subscribe(data=>{
      this.service=data;
      console.log(this.service.price);
      
      
    });
  }
  addService(){
    this.router.navigate(['add-services']);
  }

  listServices(){
    this.router.navigate(['list-services']);
  }

}
