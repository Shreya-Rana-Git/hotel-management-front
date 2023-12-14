import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Services } from '../services';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit{

  id!:number;
  service!:Services;
  constructor(private router:Router,private route:ActivatedRoute,private serve:ServicesService){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    console.log(typeof(this.id));
    this.serve.getServiceById(this.id).subscribe(data=>{
      console.log(data);
      this.service=data;
      
    });

    
  }
  onSubmit(){
    this.serve.updateService(this.id,this.service).subscribe(data=>{
      console.log(data);
      this.listServices();
      
    })
  }

  addService(){
    this.router.navigate(['add-services']);
  }

  listServices(){
    this.router.navigate(['list-services']);
  }

}
