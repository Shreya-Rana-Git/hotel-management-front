import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Accommodation } from '../accommodation';
import { AccommodationService } from '../accommodation.service';

@Component({
  selector: 'app-add-accommodation',
  templateUrl: './add-accommodation.component.html',
  styleUrls: ['./add-accommodation.component.css']
})
export class AddAccommodationComponent {

  acco:Accommodation = new Accommodation();
  constructor(private router:Router, private accService:AccommodationService){}


  saveAcco(){
    this.accService.saveAcco(this.acco).subscribe(data=>{
      this.accoList();
    });
  }
  onSubmit(){
    this.saveAcco();
  }
  accoList(){
    this.router.navigate(['acco-list']);
  }
  addAcco(){
    this.router.navigate(['add-acco']);
  }
}
