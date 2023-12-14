import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccommodationService } from '../accommodation.service';
import { Accommodation } from '../accommodation';

@Component({
  selector: 'app-accommodation-list',
  templateUrl: './accommodation-list.component.html',
  styleUrls: ['./accommodation-list.component.css']
})
export class AccommodationListComponent  implements OnInit{
  constructor(private router:Router, private accoService:AccommodationService){}

  accommodations!:Accommodation[];
ngOnInit(): void {
  this.getAccoList();
}

getAccoList(){
  this.accoService.getAllAccommodations().subscribe(data=>{
    console.log(data);
    this.accommodations = data;
  });
}

showDetails(accommodationId:String){
  this.router.navigate(['acc-details',accommodationId]);
}
updateDetails(accommodationId:String){
  this.router.navigate(['update-acco',accommodationId]);
}

DeleteAcco(accommodationId:String){
  this.accoService.deleteAcco(accommodationId).subscribe(data=>{
    this.getAccoList();
  });
}
  accoList(){
    this.router.navigate(['acco-list']);
  }
  addAcco(){
    this.router.navigate(['add-acco']);
  }
}
