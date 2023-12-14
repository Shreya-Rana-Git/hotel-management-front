import { Component ,OnInit} from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  constructor(private hotelService: HotelService,private route:ActivatedRoute, private router:Router){}
  hotel!:Hotel;
  id!:String;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.hotelService.getSingleHotel(this.id).subscribe(data=>{
      console.log(data);
      this.hotel=data;
    });
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
