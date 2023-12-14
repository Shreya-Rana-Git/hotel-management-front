import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css']
})
export class AccommodationComponent {
  constructor(private router:Router){}
  accoList(){
    this.router.navigate(['acco-list']);
  }
  addAcco(){
    this.router.navigate(['add-acco']);
  }

}
