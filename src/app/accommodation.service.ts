import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accommodation } from './accommodation';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  constructor( private http:HttpClient) { }

  private baseUrl="http://localhost:9595/hotel-app/accommodations";

  getAllAccommodations():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getAccoById(id:String):Observable<Accommodation>{
    return this.http.get<Accommodation>(`${this.baseUrl}/${id}`);
  }

  updateAcco(id:String,acco:Accommodation):Observable<object>{
    return this.http.put(`${this.baseUrl}/${id}`,acco);
  }

  saveAcco(acco:Accommodation):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,acco);
  }

  deleteAcco(id:String):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
}
