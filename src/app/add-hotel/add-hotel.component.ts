import { Component,OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  constructor(private hotelService:HotelService, private router:Router){}
  newId!:String;
  ngOnInit(): void {
    this.hotelService.getHotelId().subscribe(data=>{

      this.newId = data;
      console.log(data);
    });
  }

  hotel:Hotel = new Hotel();
  saveHotel(){
    this.hotel.hotelId = this.newId;
    this.hotelService.saveHotel(this.hotel).subscribe(data=>{
      console.log(data);
      this.goToHotelList();
    },
    error=>console.log(error)
    );
  }

  onSubmit(){
    this.saveHotel();
  }

  goToHotelList(){
    this.router.navigate(['hotel-list']);
  }









  hotelList(){
    this.router.navigate(['hotel-list']);
  }
  addHotel(){
    this.router.navigate(['add-hotel']);
  }
}

