import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {

  constructor(private router:Router){}
  hotelList(){
    this.router.navigate(['hotel-list']);
  }
  addHotel(){
    this.router.navigate(['add-hotel']);
  }
}
