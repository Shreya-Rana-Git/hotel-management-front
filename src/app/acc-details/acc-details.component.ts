import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccommodationService } from '../accommodation.service';
import { Accommodation } from '../accommodation';

@Component({
  selector: 'app-acc-details',
  templateUrl: './acc-details.component.html',
  styleUrls: ['./acc-details.component.css']
})
export class AccDetailsComponent implements OnInit {
  constructor(private router:Router,private accService:AccommodationService,private route:ActivatedRoute){}

  id!:String;
  acco:Accommodation = new Accommodation();
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.accService.getAccoById(this.id).subscribe(data=>{
      this.acco = data;
    });
  }
  accoList(){
    this.router.navigate(['acco-list']);
  }
  addAcco(){
    this.router.navigate(['add-acco']);
  }
}
