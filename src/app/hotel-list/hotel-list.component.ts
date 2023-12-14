import { Component,OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit{

  hotels!:Hotel[];
   constructor(private router:Router,private hotelService:HotelService){}
  ngOnInit(): void {
    this.getAllHotels();

  }

  getAllHotels(){
    this.hotelService.getHotelList().subscribe(data=>{
      this.hotels=data;
      console.log(data);
    });
  }

  showDetails(hotelId:String){
    this.router.navigate(['hotel-details',hotelId]);
  }

  hotelList(){
    this.router.navigate(['hotel-list']);
  }
  addHotel(){
    this.router.navigate(['add-hotel']);
  }
}
