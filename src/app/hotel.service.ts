import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private baseUrl="http://localhost:9595/hotel-app/hotel";
  private idUrl = "http://localhost:9595/hotel-app/hotel-id-gen";
  constructor(private http:HttpClient) { }
  
  //get all hotels or hotel list
   getHotelList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
   }

   // get single hotel record
   getSingleHotel(id:String):Observable<Hotel>{
    return this.http.get<Hotel>(`${this.baseUrl}/${id}`);
   }

   // get new Id
   getHotelId():Observable<any>{
    return this.http.get(`${this.idUrl}`,{responseType: 'text'});
   }

   //save hotel
   saveHotel(hotel:Hotel):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,hotel);
   }
}
