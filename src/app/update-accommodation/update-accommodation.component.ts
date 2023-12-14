import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccommodationService } from '../accommodation.service';
import { Accommodation } from '../accommodation';

@Component({
  selector: 'app-update-accommodation',
  templateUrl: './update-accommodation.component.html',
  styleUrls: ['./update-accommodation.component.css']
})
export class UpdateAccommodationComponent implements OnInit{
  id!:String;
  acco:Accommodation= new Accommodation();
  constructor(private router:Router,private route:ActivatedRoute,private accService:AccommodationService){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.accService.getAccoById(this.id).subscribe(data=>{
      this.acco=data;
      console.log(this.acco);
    });
  }

  updateAcco(){
    this.accService.updateAcco(this.id,this.acco).subscribe(data=>{
      this.accoList();
    })
  }

  onSubmit(){
    this.updateAcco();
  }


  accoList(){
    this.router.navigate(['acco-list']);
  }
  addAcco(){
    this.router.navigate(['add-acco']);
  }
}
